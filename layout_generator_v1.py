#Goals: Visually appealing
#every node has to be in its own community to some extent?
#Communities should be somewhat away from each other
#one of the most important: NO OVERLAPPING
#Nodes with bigger sizes have to be at the center of the community
#should be flexible to build animatoins later on

#Just to learn it is good to start with a circlular layout where each community is stored in its on circle
#the problem is this relies on the leiden algorthim and does not obey edge-force schema

import math

class LayoutGenerator:
    def __init__(self, nodes, relief_constant=50):
        self.nodes = sorted(nodes, reverse=True)  
        self.coordinates = []
        self.relief_constant = relief_constant
        self.border_size = self.nodes[0]  
        self.coordinates.append([0, 0, nodes[0]])   
        self.nodes.pop(0) 
        self.max_ring = 0                

    def get_intersections(self, x0, y0, r0, x1, y1, r1):
        d = math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)

        if d > r0 + r1 or d < abs(r0 - r1) or (d == 0 and r0 == r1):
            return None
        
        a = (r0 ** 2 - r1 ** 2 + d ** 2) / (2 * d)
        h = math.sqrt(r0 ** 2 - a ** 2)
        x2 = x0 + a * (x1 - x0) / d
        y2 = y0 + a * (y1 - y0) / d
        x3 = x2 + h * (y1 - y0) / d
        y3 = y2 - h * (x1 - x0) / d
        x4 = x2 - h * (y1 - y0) / d
        y4 = y2 + h * (x1 - x0) / d

        return (x3, y3, x4, y4)

    def get_occupying_radians(self, x, y, x1, y1):
        angle1 = math.atan2(y, x)
        angle2 = math.atan2(y1, x1)
        angle1, angle2 = (angle2, angle1) if angle1 > angle2 else (angle1, angle2)
        return angle2 - angle1

    def place_nodes(self, node_list, separation_constant, main_ring):
        theta = 0
        for i in range(len(node_list)):
            x =  main_ring * math.cos(theta)
            y =  main_ring * math.sin(theta)
            if i < len(node_list) - 1:
                theta += (node_list[i][0] / 2) + separation_constant + (node_list[i + 1][0] / 2)
                
            self.coordinates.append([x, y, node_list[i][1]])

    def go(self):

        if(len(self.nodes) == 0): return

        main_ring = self.border_size + self.relief_constant + self.nodes[0]

        total_occupy = 0
        separation_constant = 0
        node_list = []
        max_placed_node_size = 0

        for node_size in self.nodes[:]:
            intersections = self.get_intersections(0, 0, main_ring, 0, main_ring, node_size)
            if intersections:
                (ix0, iy0, ix1, iy1) = intersections
                node_limits = self.get_occupying_radians(ix0, iy0, ix1, iy1)

                if node_limits + total_occupy <= 2 * math.pi:
                    total_occupy += node_limits
                    node_list.append([node_limits, node_size])
                    self.nodes.remove(node_size)
                    max_placed_node_size = max(max_placed_node_size, node_size)
                else:
                    break
        
        
        separation_constant = (2 * math.pi - total_occupy) / len(node_list)
        self.place_nodes(node_list, separation_constant, main_ring)

        # Recalculate the next main ring size and repeat
        self.border_size = main_ring + max_placed_node_size
        self.max_ring = max(self.max_ring, self.border_size)
        self.go()

