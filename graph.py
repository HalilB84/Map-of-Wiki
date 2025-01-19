import matplotlib.pyplot as plt
from matplotlib.patches import Circle 
from matplotlib.collections import LineCollection
import random
import pandas as pd
import igraph as ig
import math
import time
import layouts.layout_manager as la


start_time = time.time()

node_data = pd.read_csv('Graph_Data/top_120k_jan1625_page_counts.csv')
edge_data = pd.read_csv('Graph_Data/top_120k_jan1625_page_edges.csv')

print(f'data loaded... {time.time() - start_time:.2f} seconds')

g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=False)
save_layout = True

id_to_node = {}

for i in range(g.vcount()):
     id_to_node[g.vs[i]['name']] = i
     g.vs[i]['x'] = 0
     g.vs[i]['y'] = 0


#fix nodes with no links
#this size thing is so stupid, im doing something wrong. Currently experimentally measured
_max = node_data['count'].iloc[0]
for index, row in node_data.iterrows():

    page_id = int(row['page_id'])
    count = int(row['count'])

    if page_id in id_to_node:
     g.vs[id_to_node[page_id]]['size'] = (math.pow(count/_max, 0.5 ))
     g.vs[id_to_node[page_id]]['title'] = str(row['title'])



print(f'layout stage... {time.time() - start_time:.2f} seconds')


graph_params = {
    'partitioning': 'hierarchical',
    'resolution_parameter': 0.1,
    'axis_limits': None,
    'max_levels': 5,
    'level1': "random_circle",
    'level2': "random_circle",
    'level3': 'random_circle',
    'level4': 'random_circle',
    'level5': 'random_circle',
    'level6': 'random_circle',
}

layout = la.LayoutManager(g, graph_params)
layout.apply_community_partitioning()

if (save_layout == True):
    layout.save_layout('layout.csv')
    print('layout saved')

maxx, minx, maxy, miny = layout.get_axis_limits()

print(minx, miny, maxx, maxy)

print('initializing canvas...')

plt.style.use('dark_background')
fig = plt.figure(figsize=(19.2, 10.8))

ax = fig.add_subplot()
ax.set_aspect('equal', adjustable='datalim')  

limit = (maxx - minx) if (maxx - minx) > (maxy - miny) else (maxy - miny)
ax.set_xlim(-limit, limit)
ax.set_ylim(-limit*9/16, limit*9/16)

plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
ax.set_axis_off()

print(f'rendering stage... {time.time() - start_time:.2f} seconds')

#uncomment this to draw edges
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
                  facecolor = g.vs[i]['color'], 
                  alpha = 1,
                  edgecolor='black',  
                  linewidth=0,
                  zorder=1))
             
             if(g.vs[i]['size'] > 1.0):
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

plt.savefig('Images/test3.png', format='png', dpi = 900)
print(f'finished... {time.time() - start_time:.2f} seconds')



