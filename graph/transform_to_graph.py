#bad code with bare bones for what I needed
#make sure to read and write data in utf 8, for example for some reason powershell interferes with mysqldump_to_csv
import csv

map_page = {} #should be the size of wikipedia en articles      
page_id_cnt = {} 
link_target_remap = {}  

#only care about articles in the namespcae of 0 as other pages such as templates, user space etc. are irrelevant. Namespace 0 articles can be redirects but not counted as a separate article
#map id to title for below functions
def title_id_extract(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:
            if len(row) == 0: continue

            page_id, namespace, title, redirect = int(row[0]), int(row[1]), row[2], int(row[3])
            if namespace == 0 and redirect == 0:
                #map_page[title] = page_id
                map_page[page_id] = title #should be changed in step2  

            dbg += 1

            if dbg % 1_000_000 == 0:
                print(str(dbg) + " titles")

#https://www.mediawiki.org/wiki/Manual:Linktarget_table
def remap(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:

            if len(row) == 0: continue
             
            link_id, namespace, target_title = int(row[0]), int(row[1]), row[2]

            if namespace == 0 and map_page.get(target_title) is not None:
                link_target_remap[link_id] = map_page.get(target_title)

            if namespace > 0:
                break  

            dbg += 1
            if dbg % 1_000_000 == 0:
                print(str(dbg) + " remap")

#wikimedia dumpds give link between articles via the linktarget middleman so the above function needs to be run before this to resolve the actual ids
def page2page(input_filename, output_filename):
    with open(input_filename, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)

        with open(output_filename, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            dbg = 0

            for row in reader:
                if len(row) == 0: continue

                from_page, namespace, to_title = int(row[0]), int(row[1]), int(row[2])

                if namespace == 0 and link_target_remap.get(to_title) is not None:
                    writer.writerow([from_page, link_target_remap[to_title]])

                dbg += 1

                if namespace != 0:
                    break

                if dbg % 1_000_000 == 0:
                    print(str(dbg) + " links")

#get top n articles via user pageviews, make sure map_page is changed 
def get_nodes(input_filename, output_filename, top_n=None):

    with open(input_filename, 'r', encoding='utf-8') as txt_file:

        for line in txt_file:
            row = line.strip().split(' ')

            if row[2].isdigit() == False or map_page.get(int(row[2])) == None:
                continue

            project, page_id_str, count_str, title = row[0], row[2], row[4], map_page.get(int(row[2]))

            if project == 'en.wikipedia' and page_id_str.isdigit() and title is not None:
                page_id = int(page_id_str)
                count = int(count_str)

                if page_id not in page_id_cnt:
                    page_id_cnt[page_id] = [count, title]
                else:
                    page_id_cnt[page_id][0] += count

            if project == 'en.wikiquote':
                break

        print(str(len(page_id_cnt)) + " nodes")

        sorted_page_id_cnt = sorted(page_id_cnt.items(), key=lambda item: item[1][0], reverse=True)
        if top_n:
            sorted_page_id_cnt = sorted_page_id_cnt[:top_n]

        with open(output_filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['page_id', 'count', 'title'])

            for page in sorted_page_id_cnt:
                writer.writerow([page[0], page[1][0], page[1][1]])

#now that top n nodes are made, generate the links between them via page2page 
def generate_edges(input_nodes_file, input_links_file, output_edges_file):
    arc = {}
    with open(input_nodes_file, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)

        for row in reader:
            if(row[0].isdigit()):
                page_id = int(row[0])
                arc[page_id] = 1

    with open(input_links_file, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        with open(output_edges_file, mode='w', newline='', encoding='utf-8') as file:

            writer = csv.writer(file)
            writer.writerow(['Source', 'Target'])

            tot = 0

            for row in reader:
                from_page, to_page = int(row[0]), int(row[1])

                if arc.get(to_page) is not None and arc.get(from_page) is not None:
                    writer.writerow([from_page, to_page])
                    tot += 1
            
            print(str(tot) + " edges")

#step1 run first three functions, then comment out remap and page2page, step2 run title, get_nodes, generate_edges
#https://dumps.wikimedia.org/enwiki/
#enwiki-20260201-page.sql.gz 2.2 GB
#enwiki-20260201-linktarget.sql.gz 1.3 GB
#enwiki-20260201-pagelinks.sql.gz 6.4 GB
#https://dumps.wikimedia.org/other/pageview_complete/

title_id_extract('Data/page.csv')
#remap('Data/linktarget.csv')  
#page2page('Data/pagelinks.csv', 'Data/final_links.csv')  
get_nodes('Data/pageviews-202601-user', 'Graph_Data/top_500k_page_counts.csv', 500000)
generate_edges("Graph_Data/top_500k_page_counts.csv", 'Data/final_links.csv', 'Graph_Data/top_500k_page_edges.csv')
