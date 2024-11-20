# Required imports
import matplotlib.pyplot as plt
from matplotlib.patches import Circle
import leidenalg as la
import numpy as np
import random
import pandas as pd
import igraph as ig
import math
import time
from matplotlib.collections import LineCollection


start_time = time.time()

# Load node and edge data
node_data = pd.read_csv('Graph_Data/top_60k_sep1124_page_counts.csv')
edge_data = pd.read_csv('Graph_Data/top_60k_sep1124_page_edges.csv')
print(f'Data loaded... {time.time() - start_time:.2f} seconds')

# Create graph from edge list
g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=False)

# Map IDs to nodes and set initial attributes
id_to_node = {}
for i in range(g.vcount()):
    id_to_node[g.vs[i]['name']] = i

# Set node sizes based on count (normalizing)
_max = node_data['count'].iloc[0]
for index, row in node_data.iterrows():
    page_id = int(row['page_id'])
    count = int(row['count'])

    if page_id in id_to_node:
        g.vs[id_to_node[page_id]]['size'] = math.pow(count / _max, 0.4)
        g.vs[id_to_node[page_id]]['title'] = row['title']

print(f'Partitioning stage... {time.time() - start_time:.2f} seconds')


def hierarchical_partition(graph, max_levels):
    """
    Perform hierarchical community detection using Leiden algorithm
    up to a maximum depth of levels. This is a naive implementation
    """ 
    current_partitions = []
    parition_history = [[] for _ in range(max_levels)]
    current_partitions_size = []
    level_circles = [[] for _ in range(max_levels)]

    current_partitions.append(list(range(0, graph.vcount())))


    for _ in range(max_levels):
         swap_partitions = []
         index = 0

         for partition in current_partitions:
            subgraph = graph.subgraph(partition)
            part = la.find_partition(subgraph, la.ModularityVertexPartition)
            for community in part:
                swap_partitions.append([partition[i] for i in community])

            parition_history[_].append(list(range(index, index + len(part))))
            index += len(part)
        
         current_partitions = swap_partitions
         print("The number of total partitions in level: ", len(current_partitions))


    #apply random layout to each final partition

    for i in range(len(current_partitions)):

        #first the size of the node, then the id of the node
        nodes = [[g.vs[current_partitions[i][j]]['size'], current_partitions[i][j]] for j in range(len(current_partitions[i]))]
        nodes = sorted(nodes, key=lambda x: x[0], reverse=True)

        random_placed_circles = []
        radius = nodes[0][0]

        cmap = plt.get_cmap("gist_rainbow")
        color = (cmap(random.random())[:3]) 
         
        for j in range(len(nodes)):
                dbg = 0
                while True:
                    escape = True
                    theta = random.uniform(0, 2 * math.pi)
                    r = math.sqrt(random.uniform(0, 1)) * (radius-nodes[j][0])
                    x = r * math.cos(theta)
                    y = r * math.sin(theta)

                    dbg += 1
                    if dbg % 1000 == 0:
                        #print('most likely stuck in infinite loop. Increasing radius')
                        radius += nodes[j][0] 

                    escape = True
                    for cx, cy, rad in random_placed_circles:
                        distance = math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
                        if distance < rad + nodes[j][0]:
                            escape = False
                            break

                    if escape:
                        random_placed_circles.append([x, y, nodes[j][0]])
                        g.vs[nodes[j][1]]['x'] = x
                        g.vs[nodes[j][1]]['y'] = y   
                        g.vs[nodes[j][1]]['color'] = color 
                        break

        current_partitions_size.append(radius)
        level_circles[max_levels-1].append([0, 0, radius])
        
    #then aggregate all the partitions level by level, print time it took
    print(f'Random layout completed... {time.time() - start_time:.2f} seconds')

    for _ in reversed(range(max_levels)):

        temp_sizes = []

        for i in range(len(parition_history[_])):
            nodes = [[current_partitions_size[index], current_partitions[index]] for index in parition_history[_][i]]
            nodes = sorted(nodes, key=lambda x: x[0], reverse=True)
            level_circles[_] = sorted(level_circles[_], key=lambda x: x[2], reverse=True)

            random_placed_circles = []
            radius = nodes[0][0]
            
            for j in range(len(nodes)):
                    dbg = 0
                    while True:
                        escape = True
                        theta = random.uniform(0, 2 * math.pi)
                        r = 1 * (radius-nodes[j][0])
                        x = r * math.cos(theta)
                        y = r * math.sin(theta)

                        dbg += 1
                        if dbg % 1000 == 0:
                            #print('most likely stuck in infinite loop. Increasing radius')
                            radius += nodes[j][0]

                        escape = True
                        for cx, cy, rad in random_placed_circles:
                            distance = math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
                            if distance < rad + nodes[j][0]:
                                escape = False
                                break

                        if escape:
                            random_placed_circles.append([x, y, nodes[j][0]])
                            level_circles[_][j][0] += x
                            level_circles[_][j][1] += y

                            for node in nodes[j][1]:
                                g.vs[node]['x'] += x
                                g.vs[node]['y'] += y
                            break

            temp_sizes.append(radius)
            if(_ != 0): level_circles[_ - 1].append([0, 0, radius])

        current_partitions_size = temp_sizes

        #the curret partitions are now the aggregated partitions
        temp_partitions = []
        for i in range(len(parition_history[_])):
            temp_partitions.append([node for index in parition_history[_][i] for node in current_partitions[index]])
        
        current_partitions = temp_partitions

    return level_circles

                


lvls = hierarchical_partition(g, max_levels=4)

print(f'Hierarchical partitioning completed... {time.time() - start_time:.2f} seconds')

print('initializing canvas...')



plt.style.use('dark_background')
fig = plt.figure(figsize=(19.2, 10.8))

ax = fig.add_subplot()
ax.set_aspect('equal', adjustable='datalim')  

axis_limits = 150

ax.set_xlim(-axis_limits, axis_limits)
ax.set_ylim(-axis_limits*9/16, axis_limits*9/16)

plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
ax.set_axis_off()

print(f'rendering stage... {time.time() - start_time:.2f} seconds')

'''
#uncomment this to draw edges
#not recommended and does not lookg good
segments = []
line_colors = []
#smart edge drawing algo?
for idx, edge in enumerate(g.es):
    source_x = g.vs[edge.source]['x']
    source_y = g.vs[edge.source]['y']
    target_x = g.vs[edge.target]['x']
    target_y = g.vs[edge.target]['y']

    segments.append([(source_x, source_y), (target_x, target_y)])
    line_colors.append(g.vs[edge.source]['color'])    

lc = LineCollection(segments, color=line_colors, linewidth=0.01, zorder=0)
ax.add_collection(lc)
'''


print(f'drawing nodes... {time.time() - start_time:.2f} seconds')


for i in range(g.vcount()):
             ax.add_artist(Circle(xy=(g.vs[i]['x'], g.vs[i]['y']), 
                  radius=g.vs[i]['size'],
                  facecolor = g.vs[i]['color'],
                  alpha = 1,
                  edgecolor='white',  
                  linewidth=0,
                  zorder=1))
             
             if(g.vs[i]['size'] > 1.00):
                
                ax.text(
                    g.vs[i]['x'], 
                    g.vs[i]['y'], 
                    str(g.vs[i]['title']),  
                    ha='center', 
                    va='center',  
                    fontsize=g.vs[i]['size'],  
                    color='white'  
                )

for i in range(len(lvls)):
    for x, y, r in lvls[i]:
        ax.add_artist(Circle(xy=(x, y), 
                    radius=r,
                    facecolor = 'none',
                    edgecolor='white',  
                    linewidth=0.1,
                    zorder=2))


print('final rendering...')

plt.savefig('Images/tests.png', format='png', dpi = 600)
#plt.savefig('Images/tests.svg', format='svg', dpi = 600)
print(f'finished... {time.time() - start_time:.2f} seconds')


