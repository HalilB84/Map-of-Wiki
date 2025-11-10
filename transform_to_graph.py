"""
Scripts to process Wikipedia SQL dumps into a usable CSV format.

WARNING:
- The code is not optimized for speed or memory usage, but it is faster than SQL imports
- Right now works fine but there are many edge cases that might break in the future
- Tested on an Intel Core Ultra 5 125U, 8GB RAM laptop with ~30 minutes execution time (to run all scripts) for all eng wiki articles.

NOTE:
- Handles large datasets (~30M - 800M rows) and is memory-intensive.
- Files not included for storage reasons; all data is from Wikipedia dumps
"""

import csv

map_page = {}           # Maps page IDs to titles (~6.7M entries expected)
page_id_cnt = {}        # Tracks page view counts and titles
link_target_remap = {}  # Remaps link targets to page IDs

# Function to parse ~60M rows and extract titles and IDs for non-redirect pages
def title_id_extract(filename):
    with open(filename, 'r', encoding='utf-8', errors="replace") as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:

          if len(row) >= 4:

            page_id, namespace, title, redirect = int(row[0]), int(row[1]), row[2], int(row[3])
            if namespace == 0 and redirect == 0:
                map_page[page_id] = title  # Map page ID to title

            dbg += 1

            if dbg % 1_000_000 == 0:
                print(f"Processed {dbg} rows in title_id_extract")

# Function to parse ~33M rows and remap link targets to page IDs
def remap(filename):
    with open(filename, 'r') as file:
        reader = csv.reader(file)
        dbg = 0
        for row in reader:
            link_id, namespace, target_title = int(row[0]), int(row[1]), row[2]

            if namespace == 0 and map_page.get(target_title) is not None:
                link_target_remap[link_id] = map_page.get(target_title)

            if namespace > 0:
                break  

            dbg += 1
            if dbg % 1_000_000 == 0:
                print(f"Processed {dbg} rows in remap")

# Function to parse ~796M rows, filter links to actual articles, and write to a CSV
def page2page(input_filename, output_filename):
    with open(input_filename, 'r') as file:
        reader = csv.reader(file)

        with open(output_filename, 'w') as outfile:
            cnt = 0

            for row in reader:
                from_page, namespace, to_title = int(row[0]), int(row[1]), row[2]

                if namespace == 0 and link_target_remap.get(to_title) is not None:
                    outfile.write(f"{from_page},{link_target_remap[to_title]}\n")

                cnt += 1

                if namespace != 0:
                    break

                if cnt % 1_000_000 == 0:
                    print(f"Processed {cnt} rows in page2page")

# Function to extract node data and write sorted page views and titles to a CSV
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

        print(f"Extracted {len(page_id_cnt)} nodes.")

        sorted_page_id_cnt = sorted(page_id_cnt.items(), key=lambda item: item[1][0], reverse=True)
        if top_n:
            sorted_page_id_cnt = sorted_page_id_cnt[:top_n]

        with open(output_filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['page_id', 'count', 'title'])

            for page in sorted_page_id_cnt:
                writer.writerow([page[0], page[1][0], page[1][1]])

        print(f"Top {top_n} nodes saved to {output_filename}")

# Function to generate edges between pages and write to a CSV
def generate_edges(input_nodes_file, input_links_file, output_edges_file):
    arc = {}
    with open(input_nodes_file, 'r') as file:
        reader = csv.reader(file)

        for row in reader:
            if(row[0].isdigit()):
                page_id = int(row[0])
                arc[page_id] = 1

    with open(input_links_file, 'r') as file:
        reader = csv.reader(file)
        with open(output_edges_file, mode='w', newline='') as file:

            writer = csv.writer(file)
            writer.writerow(['Source', 'Target'])

            for row in reader:
                from_page, to_page = int(row[0]), int(row[1])

                if arc.get(to_page) is not None and arc.get(from_page) is not None:
                    writer.writerow([from_page, to_page])

title_id_extract('Data/titles.txt')
# remap('Data/linktarget.txt')  # Uncomment if link remapping is needed
# page2page('Data/pagelinks.txt', 'Data/final_links.csv')  # Uncomment if page linking is needed
  
get_nodes('Data/pageviews-20250116-user', 'Graph_Data/top_120k_jan1625_page_counts.csv', 120000)
generate_edges("Graph_Data/top_120k_jan1625_page_counts.csv", 'Data/final_links.csv', 'Graph_Data/top_120k_jan1625_page_edges.csv')

print("Done!")
