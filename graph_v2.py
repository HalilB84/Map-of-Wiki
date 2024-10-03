import matplotlib.pyplot as plt
from matplotlib.patches import Circle 
from layout_generator_v1 import LayoutGenerator
import pandas as pd
import math
import igraph as ig
import leidenalg as la
from matplotlib.collections import LineCollection
import random


#beware of this code, I have no idea what im doing. Implemented very naively.

node_data = pd.read_csv('top_250k_page_counts.csv')
edge_data = pd.read_csv('top_250kpage_edges.csv')

print('data loaded...')

g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=True)


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

partition = la.find_partition(g, la.ModularityVertexPartition, n_iterations=3)
num_communities = len(set(partition.membership))

partitioned_nodes = [[] for _ in range(num_communities)]

for node_id in range(g.vcount()):
    partition_id = partition.membership[node_id]
    partitioned_nodes[partition_id].append([g.vs[node_id]['size'], node_id])

minx = 1e18
miny = 1e18
maxx = -1
maxy = -1

#needs refactoring asap, very ineffeicient implementation
placed_circles = []

for i in range(num_communities):
    
     sorted_nodes = sorted(partitioned_nodes[i], reverse=True)
     nodes = [sublist[0] for sublist in sorted_nodes]
     nodes_index = [sublist[1] for sublist in sorted_nodes] 

     ly = LayoutGenerator(nodes)
     ly.go()
     coords  = ly.coordinates
     main_size = ly.max_ring

     while True:
        x_offset = random.randint(-50000, 50000)
        y_offset = random.randint(-30000, 30000)

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

          miny = min(miny, y)
          maxy = max(maxy, y)
          minx = min(minx, x)
          maxx = max(maxx, x)

          g.vs[nodes_index[i]]['size'] = coords[i][2]
          g.vs[nodes_index[i]]['x'] = x
          g.vs[nodes_index[i]]['y'] = y


print('rendering stage...')

cmap = plt.get_cmap("gist_rainbow")
colors = [(cmap(i / num_communities)[:3]) for i in range(num_communities)] 


#need to figure out what is actually happening here
plt.style.use('dark_background')
fig = plt.figure(figsize=(1920/100, 1080/100))


ax = fig.add_subplot()
ax.set_aspect('equal', adjustable='datalim')  


ax.set_xlim(-25000*1920/1080,25000*1920/1080)
ax.set_ylim(-25000, 25000)


segments = []
line_colors = []

#uncomment this to draw edges
#not recommended 
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
                  facecolor = colors[partition.membership[i]],
                  alpha = 0.8,
                  edgecolor='black',  
                  linewidth=0.1,
                  zorder=1))
    if g.vs[i]['size'] > 150:
        
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
ax.set_axis_off()
plt.savefig('test.png', format='png', dpi = 600)
