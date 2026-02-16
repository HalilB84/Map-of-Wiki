import math
import random
import leidenalg as la
import numpy as np
import matplotlib.pyplot as plt
import csv

import random_circle_layout as random_circle_layout
import spiral_layout as spiral_layout

class LayoutManager:
    def __init__(self, graph, graph_params):

        self.graph = graph
        self.graph_params = graph_params

    def apply_community_partitioning(self):
        #either singular or hierechal

        if(self.graph_params['partitioning'] == 'singular'):
            partition = la.find_partition(self.graph, la.CPMVertexPartition, resolution_parameter=self.graph_params['resolution_parameter'])
            #partition = la.find_partition(self.graph, la.RBConfigurationVertexPartition, resolution_parameter=20)

            num_communities = len(set(partition.membership))
            print('number of communities', num_communities)

            partitioned_nodes = [[] for _ in range(num_communities)]

            partition_membership = np.array(partition.membership)  
            node_sizes = np.array(self.graph.vs['size'])  

            partitioned_nodes = [[] for _ in range(num_communities)]

            #apperantly using np array is way faster
            #level 1 
            for node_id in range(self.graph.vcount()):
                partition_id = partition_membership[node_id]
                partitioned_nodes[partition_id].append([node_sizes[node_id], node_id])

            next_level_partitioned_nodes = []

            for i in range(num_communities):
                partitioned_nodes[i] = sorted(partitioned_nodes[i], key=lambda x: x[0], reverse=True)
                coords, size = self._apply_layout(partitioned_nodes[i], self.graph_params['level1'])

                self._add_coords(coords, color = True)

                #only need node ids for next level after size
                next_level_partitioned_nodes.append([size, [node[1] for node in partitioned_nodes[i]]])
            
            next_level_partitioned_nodes = sorted(next_level_partitioned_nodes, key=lambda x: x[0], reverse=True)
            coords, size = self._apply_layout(next_level_partitioned_nodes, self.graph_params['level2'])

            self._add_coords(coords, color = False)


#################################################################################################################

        #Not sure why I didn't go for a recursive approach, but this is the current implementation
            
        elif(self.graph_params['partitioning'] == 'hierarchical'):

            current_partitions = []
            parition_history = [[] for _ in range(self.graph_params['max_levels'])]
            current_partitions_size = []

            current_partitions.append(list(range(0, self.graph.vcount())))

            for _ in range(self.graph_params['max_levels']):
                swap_partitions = []
                index = 0

                for partition in current_partitions:
                    subgraph = self.graph.subgraph(partition)
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
                nodes = [[self.graph.vs[current_partitions[i][j]]['size'], current_partitions[i][j]] for j in range(len(current_partitions[i]))]
                nodes = sorted(nodes, key=lambda x: x[0], reverse=True)
                
                #layout here
                coords, radius = self._apply_layout(nodes, self.graph_params['level1'])
                self._add_coords(coords, color = True)

                current_partitions_size.append(radius)
                
            for level_num in reversed(range(self.graph_params['max_levels'])):

                temp_sizes = []
                level_str = f"level{self.graph_params['max_levels'] - level_num}"  #fix

                for i in range(len(parition_history[level_num])):
                    nodes = [[current_partitions_size[index], current_partitions[index]] for index in parition_history[level_num][i]]
                    nodes = sorted(nodes, key=lambda x: x[0], reverse=True)
 
                    coords, radius = self._apply_layout(nodes, self.graph_params['level2']) #should be level X, fix it
                    self._add_coords(coords, color = False)

                    temp_sizes.append(radius)

                current_partitions_size = temp_sizes

                #the curret partitions are now the aggregated partitions
                temp_partitions = []
                for i in range(len(parition_history[level_num])):
                    temp_partitions.append([node for index in parition_history[level_num][i] for node in current_partitions[index]])
                
                current_partitions = temp_partitions

    def _add_coords(self, coords, color):
        cmap = plt.get_cmap("gist_rainbow")
        colors = cmap(random.random())[:3] 

        for coord in coords:
            if isinstance(coord[2], list):
                for i in coord[2]:
                    self.graph.vs[i]['x'] += coord[0]
                    self.graph.vs[i]['y'] += coord[1]
                    if color:
                        self.graph.vs[i]['color'] = colors

            else:
                self.graph.vs[coord[2]]['x'] += coord[0]
                self.graph.vs[coord[2]]['y'] += coord[1]
                if color:
                    self.graph.vs[coord[2]]['color'] = colors

    def _apply_layout(self, nodes, layout_type):
        #either randomS, randomB, spiral
        #return coordinates and add** to graph
        match layout_type:
            case 'random_circle':
                layout = random_circle_layout.RandomCircleLayout(nodes)
            case 'spiral':
                layout = spiral_layout.SpiralLayout(nodes)
    
        return layout.get_coordinates(), layout.get_max_radius()
    
    def save_layout(self, filename):
        with open(filename, 'w',  newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['id', 'title', 'x', 'y', 'size', 'r', 'g', 'b'])
            for i in range(self.graph.vcount()):
                n = self.graph.vs[i]
                writer.writerow([n['name'], n['title'], n['x'], n['y'], n['size'], n['color'][0], n['color'][1], n['color'][2]])
