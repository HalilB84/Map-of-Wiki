import math
import random
import matplotlib.pyplot as plt
import networkx as nx

def fruchterman_reingold_layout(graph, iterations=100, area=1.0, gravity=1.0, k=None, temperature=0.1):
    """
    Implements the Fruchterman-Reingold force-directed layout algorithm.
    """
    num_nodes = graph.number_of_nodes()
    
    if k is None:
        k = math.sqrt(area / num_nodes)
    
    pos = {node: (random.uniform(-1, 1), random.uniform(-1, 1)) for node in graph.nodes}
    
    displacement = {node: [0, 0] for node in graph.nodes}
    
    def euclidean_distance(p1, p2):
        return math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)
    
    for iteration in range(iterations):
        for node in displacement:
            displacement[node] = [0, 0]
        
        for u in graph.nodes:
            for v in graph.nodes:
                if u != v:
                    delta_x = pos[u][0] - pos[v][0]
                    delta_y = pos[u][1] - pos[v][1]
                    distance = euclidean_distance(pos[u], pos[v])
                    if distance > 0:

                        repulsion = k ** 2 / distance
                        displacement[u][0] += (delta_x / distance) * repulsion
                        displacement[u][1] += (delta_y / distance) * repulsion
        
        for u, v in graph.edges:
            delta_x = pos[u][0] - pos[v][0]
            delta_y = pos[u][1] - pos[v][1]
            distance = euclidean_distance(pos[u], pos[v])
            if distance > 0:

                attraction = (distance ** 2) / k
                displacement[u][0] -= (delta_x / distance) * attraction
                displacement[u][1] -= (delta_y / distance) * attraction
                displacement[v][0] += (delta_x / distance) * attraction
                displacement[v][1] += (delta_y / distance) * attraction
        
        for u in graph.nodes:
            delta_x = pos[u][0]
            delta_y = pos[u][1]
            distance = euclidean_distance(pos[u], (0, 0))
            if distance > 0:
                gravity_force = gravity * k * distance
                displacement[u][0] -= (delta_x / distance) * gravity_force
                displacement[u][1] -= (delta_y / distance) * gravity_force
        
        for u in graph.nodes:
            displacement_x, displacement_y = displacement[u]
            displacement_magnitude = math.sqrt(displacement_x ** 2 + displacement_y ** 2)
            if displacement_magnitude > 0:
                limited_displacement = min(temperature, displacement_magnitude)
                pos[u] = (
                    pos[u][0] + (displacement_x / displacement_magnitude) * limited_displacement,
                    pos[u][1] + (displacement_y / displacement_magnitude) * limited_displacement,
                )
        
        temperature *= 0.95
    
    return pos


