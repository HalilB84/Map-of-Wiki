import matplotlib.pyplot as plt
from matplotlib.patches import Circle 
from spiral_layout import SpiralLayout
from random_circle_layout import RandomCircleLayout
import leidenalg as la
import numpy as np
from matplotlib.collections import LineCollection
import random
import pandas as pd
import igraph as ig
import math
import time


start_time = time.time()

node_data = pd.read_csv('Graph_Data/top_60k_sep1124_page_counts.csv')
edge_data = pd.read_csv('Graph_Data/top_60k_sep1124_page_edges.csv')

print(f'data loaded... {time.time() - start_time:.2f} seconds')

g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=False)


id_to_node = {}

for i in range(g.vcount()):
     id_to_node[g.vs[i]['name']] = i


#fix nodes with no links
#this size thing is so stupid, im doing something wrong. Currently experimentally measured
_max = node_data['count'].iloc[0]
for index, row in node_data.iterrows():

    page_id = int(row['page_id'])
    count = int(row['count'])

    if page_id in id_to_node:
     g.vs[id_to_node[page_id]]['size'] = (math.pow(count/_max,0.4))
     g.vs[id_to_node[page_id]]['title'] = row['title']



print(f'partitioning stage... {time.time() - start_time:.2f} seconds')

partition = la.find_partition(g, la.CPMVertexPartition, resolution_parameter=0.01)
#partition = la.find_partition(g, la.RBConfigurationVertexPartition, resolution_parameter=20)


num_communities = len(set(partition.membership))
print('number of communities', num_communities)

partitioned_nodes = [[] for _ in range(num_communities)]

partition_membership = np.array(partition.membership)  
node_sizes = np.array(g.vs['size'])  

partitioned_nodes = [[] for _ in range(num_communities)]

#apperantly using np array is way faster
for node_id in range(g.vcount()):
    partition_id = partition_membership[node_id]
    partitioned_nodes[partition_id].append([node_sizes[node_id], node_id])


print(f'layout generation stage... {time.time() - start_time:.2f} seconds')

#the axis limits are experimentally measured? Very bad practice needs a good algorithm
layout = RandomCircleLayout(partitioned_nodes, 30)
#layout = SpiralLayout(partitioned_nodes, 20)

for i in range(g.vcount()):
    g.vs[layout.final_coords[i][2]]['x'] = layout.final_coords[i][0]
    g.vs[layout.final_coords[i][2]]['y'] = layout.final_coords[i][1]

print('initializing canvas...')

cmap = plt.get_cmap("gist_rainbow")
colors = [(cmap(random.random())[:3]) for _ in range(num_communities)]

plt.style.use('dark_background')
fig = plt.figure(figsize=(19.2, 10.8))

ax = fig.add_subplot()
ax.set_aspect('equal', adjustable='datalim')  

ax.set_xlim(-layout.axis_limits, layout.axis_limits)
ax.set_ylim(-layout.axis_limits*9/16, layout.axis_limits*9/16)

plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
ax.set_axis_off()

print(f'rendering stage... {time.time() - start_time:.2f} seconds')

#uncomment this to draw edges
#not recommended and does not lookg good
'''
segments = []
line_colors = []

#smart edge drawing algo?
for idx, edge in enumerate(g.es):
    source_x = g.vs[edge.source]['x']
    source_y = g.vs[edge.source]['y']
    target_x = g.vs[edge.target]['x']
    target_y = g.vs[edge.target]['y']

    segments.append([(source_x, source_y), (target_x, target_y)])
    line_colors.append(colors[partition_membership[edge.source]])

lc = LineCollection(segments, color=line_colors, linewidth=0.01, zorder=0)
ax.add_collection(lc)
'''

print(f'drawing nodes... {time.time() - start_time:.2f} seconds')


for i in range(g.vcount()):
             ax.add_artist(Circle(xy=(g.vs[i]['x'], g.vs[i]['y']), 
                  radius=g.vs[i]['size'],
                  facecolor = colors[partition_membership[i]],
                  alpha = 1,
                  edgecolor='black',  
                  linewidth=0,
                  zorder=1))
             
             if(g.vs[i]['size'] > 0.08):
                ax.text(
                    g.vs[i]['x'], 
                    g.vs[i]['y'], 
                    str(g.vs[i]['title']),  
                    ha='center', 
                    va='center',  
                    fontsize=g.vs[i]['size'],  
                    color='white'  
                )
        
print('final rendering...')

plt.savefig('Images/test.png', format='png', dpi = 600)
print(f'finished... {time.time() - start_time:.2f} seconds')
