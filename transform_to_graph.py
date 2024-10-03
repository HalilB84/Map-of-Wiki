#scripts to get data from wikipedia sql dumps to somewhat sensible csv form
#wikipedia uses sql for a reason. Only use this code if you want to significantly speed things up as importing the sql takes forever
#also if you want to save up storage space

#hazard code below use it on your own risk
#although it works in my 8gb ram laptop around 30 min execution time

import csv
map_page = {}
page_id_cnt = {}
link_target_remap = {}
#both of these should contain about 6.7 million entries. Very ineffecient but it is what it is.

#parses 60m rows
#stores the page ids that are not redirects
def title_id_extract(filename):
    with open(filename, 'r', encoding='utf8', errors='replace') as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:
            if len(row) >= 4:
                    
                    dbg = dbg + 1
                    if int(row[1]) == 0 and int(row[3]) == 0:
                        map_page[int(row[0])] = row[2]

                    if(dbg%1000000 == 0): print(dbg)

#parses 33m rows
#remaps the link targets to the page ids because wikipedia doesnt explicitly store the page ids for the links
#needs a fix?
def remap(filename):
    with open(filename, 'r') as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:
            if len(row) >= 1:
                if(int(row[1]) == 0 and map_page.get(row[2]) != None):
                    link_target_remap[row[0]] = map_page.get(row[2])
                if(int(row[1]) > 0): break

                dbg = dbg + 1
                if(dbg%1000000==0): print(dbg)


#write to csv
#parses around 796m rows
#primary purpose is to get the links that link actual articles, this reduceds the amount of links to search
def page2page(input_filename, output_filename):

    with open(input_filename, 'r') as file:
        reader = csv.reader(file)
        
        with open(output_filename, 'w') as outfile:
            cnt = 0
            for row in reader:
                if len(row) >= 1:
                    if int(row[1]) == 0 and (link_target_remap.get(row[2]) != None):
                        outfile.write(f"{row[0]},{link_target_remap.get(row[2])}\n")
                    cnt = cnt + 1

                    if(int(row[1]) != 0 ): break
                    
                    if(cnt % 1000000 == 0): print(cnt)


def get_nodes(filename):
    with open(filename, 'r', encoding='utf-8') as txt_file:

        for line in txt_file:
            row = line.strip().split(' ')
            if(row[0] == 'en.wikipedia' and row[2].isdigit() and map_page.get(int(row[2])) != None):

                if(int(row[2]) not in page_id_cnt):
                    page_id_cnt[int(row[2])] = [int(row[4]), map_page.get(int(row[2]))]

                else:page_id_cnt[int(row[2])][0] += int(row[4])
         
            if(row[0] == 'en.wikiquote'): break
        print(len(page_id_cnt))

        sorted_page_id_cnt = sorted(page_id_cnt.items(), key=lambda item: item[1], reverse=True)

        top_ = sorted_page_id_cnt[:250000]

        with open('top_250k_page_counts.csv', mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)

            writer.writerow(['page_id', 'count', 'title'])

            for page in top_:
                writer.writerow([page[0], page[1][0], page[1][1]])

def generate_edges(filename1, filename2):
    arc = {}
    with open(filename1, 'r') as file:
        reader = csv.reader(file)

        for row in reader:
            if(row[0].isdigit()): arc[int(row[0])] = 1

    print('debug')

    with open(filename2, 'r') as file:
        reader = csv.reader(file)
        with open('top_250kpage_edges.csv', mode='w', newline='') as file:
            writer = csv.writer(file)

            writer.writerow(['Source', 'Target'])
            for row in reader:
                if((arc.get(int(row[1])) != None) and (arc.get(int(row[0])) != None)):
                        writer.writerow([int(row[0]), int(row[1])])


#files not included in github for obvious reasons
#all data is from wikipedia dumps

title_id_extract('titles-csv.txt')
#remap('linktarget-csv.txt')
#page2page('pagelinks-csv.txt', 'final_links_V2.csv')
get_nodes('pageviews-20240911-user')
generate_edges('top_250k_page_counts.csv', 'final_links-csv.csv')

print('Done!')






