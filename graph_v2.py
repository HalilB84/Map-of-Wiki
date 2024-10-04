import matplotlib.pyplot as plt
from matplotlib.patches import Circle 
from layout_generator_v1 import LayoutGenerator
import pandas as pd
import math
import igraph as ig
import leidenalg as la
import numpy as np
from matplotlib.collections import LineCollection
import random


#beware of this code, I have no idea what im doing. Implemented very naively.

node_data = pd.read_csv('Graph_Data/top_250k_page_counts.csv')
edge_data = pd.read_csv('Graph_Data/top_250kpage_edges.csv')

print('data loaded...')

g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=False)


id_to_node = {}

for i in range(g.vcount()):
     id_to_node[g.vs[i]['name']] = i


#fix nodes with no links

max_count = node_data['count'].max()
for index, row in node_data.iterrows():

    page_id = int(row['page_id'])
    count = int(row['count'])

    if page_id in id_to_node:
     g.vs[id_to_node[page_id]]['size'] = (8000*math.pow(count/max_count,0.6))
     g.vs[id_to_node[page_id]]['title'] = row['title']



print('partitioning stage...')

#a lot of interesting ways to do community detection...
partition = la.find_partition(g, la.CPMVertexPartition, resolution_parameter=0.5)
#partition = g.community_multilevel(return_levels=False, resolution = 0.5)


num_communities = len(set(partition.membership))
print('number of communities', num_communities)

partitioned_nodes = [[] for _ in range(num_communities)]
i=0

partition_membership = np.array(partition.membership)  # Convert to NumPy array for fast indexing
node_sizes = np.array(g.vs['size'])  # Access 'size' attribute for all nodes in one call

partitioned_nodes = [[] for _ in range(num_communities)]

#apperantly using np array is way faster
for node_id in range(g.vcount()):
    partition_id = partition_membership[node_id]
    partitioned_nodes[partition_id].append([node_sizes[node_id], node_id])

miny = 1e18
maxy = -1

#needs refactoring asap, very ineffeicient implementation
placed_circles = []

print('layout generation stage...')

#option 1: Find a way to place simmilar communities together
#option 2: Place larger communities in the center and spiral outwards
for i in range(num_communities):
    
     sorted_nodes = sorted(partitioned_nodes[i], reverse=True)
     nodes = [sublist[0] for sublist in sorted_nodes]
     nodes_index = [sublist[1] for sublist in sorted_nodes] 

     ly = LayoutGenerator(nodes)
     ly.go()
     coords  = ly.coordinates
     main_size = ly.max_ring

     dbg = 0
     default_x = 60000
     default_y = 40000

     #placing communities
     while True:
        x_offset = random.randint(-default_x, default_x)
        y_offset = random.randint(-default_y, default_y)
        dbg +=1
        if(dbg % 1000 == 0): 
            print('most likely stuck in infinite loop. Increase default_x and default_y')
            default_x += 10000
            default_y += 10000

        escape = True
        if(len(placed_circles) == 0): 
            placed_circles.append([x_offset, y_offset, main_size])
            break

        for circle in placed_circles:
            if math.sqrt((circle[0] - x_offset)**2 + (circle[1] - y_offset)**2) < circle[2] + main_size:
                escape = False
                break

        if(escape):
            placed_circles.append([x_offset, y_offset, main_size])
            break
       

     for i in range(len(coords)):
          x = coords[i][0] + x_offset
          y = coords[i][1] + y_offset

          miny = min(miny, y-ly.max_ring)
          maxy = max(maxy, y+ly.max_ring)

          g.vs[nodes_index[i]]['size'] = coords[i][2]
          g.vs[nodes_index[i]]['x'] = x
          g.vs[nodes_index[i]]['y'] = y


print('initialzing canvas...')

cmap = plt.get_cmap("gist_rainbow")

#looks better until i sort things out
colors = [(cmap(random.random())[:3]) for _ in range(num_communities)]


#need to figure out what is actually happening here
plt.style.use('dark_background')
fig = plt.figure(figsize=(1920/100, 1080/100))


ax = fig.add_subplot()
ax.set_aspect('equal', adjustable='datalim')  


ax.set_xlim(miny*1920/1080,maxy*1920/1080)
ax.set_ylim(miny, maxy)

print('rendering stage...')

segments = []
line_colors = []

#uncomment this to draw edges
#not recommended and does not lookg good
'''
#smart edge drawing algo?
for idx, edge in enumerate(g.es):
    source_x = g.vs[edge.source]['x']
    source_y = g.vs[edge.source]['y']
    target_x = g.vs[edge.target]['x']
    target_y = g.vs[edge.target]['y']

    segments.append([(source_x, source_y), (target_x, target_y)])
    line_colors.append(colors[partition.membership[edge.source]])

lc = LineCollection(segments, color=line_colors, linewidth=0.01, zorder=0)
ax.add_collection(lc)
'''

for i in range(g.vcount()):
    ax.add_artist(Circle(xy=(g.vs[i]['x'], g.vs[i]['y']), 
                  radius=g.vs[i]['size'],
                  facecolor = colors[partition_membership[i]],
                  alpha = 0.8,
                  edgecolor='black',  
                  linewidth=0.1,
                  zorder=1))
    
    if g.vs[i]['size'] > 200:
    
        font_size = g.vs[i]['size'] / 3000  
        ax.text(
            g.vs[i]['x'], 
            g.vs[i]['y'], 
            str(g.vs[i]['title']),  # Use the node name or any other attribute as label
            ha='center',  # Horizontal alignment
            va='center',  # Vertical alignment
            fontsize=font_size,  # Set the font size based on node size
            color='white'  # Color of the text
        )

#plt.show()
#ax.set_axis_off()
plt.savefig('Images/test.png', format='png', dpi = 600)
