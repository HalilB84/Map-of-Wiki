#Goals: Visually appealing
#every node has to be in its own community to some extent?
#one of the most important: NO OVERLAPPING
#Nodes with bigger sizes have to be at the center of the community
#should be flexible to build animatoins later on

#Just to learn it is good to start with a circlular layout where each community is stored in its on circle
#the problem is this relies on the leiden algorthim and does not obey edge-force schema
#update: many problem associated with this approach, communuities not being close is the biggest problem.
#also looks too perfect and not visually appealing, thats why I'm giving a random spiral placement a try

import math
import random

#provided format: [ [community 1], [community 2] ], community 1 = [node_size_1, node_id_1], [node_size_2, node_id_2]...
#output format (coords): [ [x,y,node_id], [x1,y1,node_id1], ... ]  

#what am I even doing at this point??????
#violating every professional coding rule below

class SpiralLayout:

    def __init__(self, partitioned_nodes, axis_limits):
        self.partitioned_nodes = partitioned_nodes
        self.coords = []
        self.placed_circles = []
        self.final_coords = []
        self.axis_limits = axis_limits

        for i in range(len(partitioned_nodes)):
            self.initialize(sorted(self.partitioned_nodes[i], key=lambda x: x[0], reverse=True), 50)
            self.coords.append([self.max_ring, self.coordinates])

        self.coords = sorted(self.coords, key=lambda x: x[0], reverse=True)

        for i in range(len(self.coords)):
            main_size = self.coords[i][0]
            sorted_nodes = self.coords[i][1]  

            dbg = 0   
  
            while True:
                x_offset = random.randint(-self.axis_limits, self.axis_limits)
                y_offset = random.randint(-int(self.axis_limits*9/16), int(self.axis_limits*9/16))

                dbg +=1
                print(i)
                if(dbg % 1000 == 0): 
                    print(i, 'most likely stuck in infinite loop. Increase limits')
                    self.axis_limits += 1000

                escape = True
                if(len(self.placed_circles) == 0): 
                    self.placed_circles.append([x_offset, y_offset, main_size])
                    break

                for cx, cy, radius in self.placed_circles:
                    distance = math.sqrt((cx - x_offset) ** 2 + (cy - y_offset) ** 2)

                    if distance < radius + main_size:
                        escape = False
                        break

                    if any([
                        x_offset + main_size > self.axis_limits,
                        x_offset - main_size < -self.axis_limits,
                        y_offset + main_size > self.axis_limits * 9 / 16,
                        y_offset - main_size < -self.axis_limits * 9 / 16
                        ]):
                        escape = False
                        break             

                if(escape):
                    self.placed_circles.append([x_offset, y_offset, main_size])
                    break
            

            for j in range(len(sorted_nodes)):
                x = sorted_nodes[j][0] + x_offset
                y = sorted_nodes[j][1] + y_offset

                self.final_coords.append([x, y, sorted_nodes[j][2]])
                    
             

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

    def initialize(self, nodes, relief_constant):
            self.nodes = nodes
            self.coordinates = []
            self.relief_constant = relief_constant
            self.border_size = self.nodes[0][0]  
            
            self.max_ring = 0

            self.coordinates.append([0, 0, self.nodes[0][1]])   
            self.nodes.remove(self.nodes[0])

            self.go()      

    def go(self):

        if(len(self.nodes) == 0): return

        main_ring = self.border_size + self.relief_constant + self.nodes[0][0]

        total_occupy = 0
        separation_constant = 0
        node_list = []
        max_placed_node_size = 0


        for node in self.nodes[:]:
                (ix0, iy0, ix1, iy1) = self.get_intersections(0, 0, main_ring, 0, main_ring, node[0])
                node_limits = self.get_occupying_radians(ix0, iy0, ix1, iy1)

                if node_limits + total_occupy <= 2 * math.pi:
                    total_occupy += node_limits
                    node_list.append([node_limits, node[1]])
                    self.nodes.remove(node)
                    max_placed_node_size = max(max_placed_node_size, node[0])
                else:
                    break
        
        separation_constant = (2 * math.pi - total_occupy) / len(node_list)
        self.place_nodes(node_list, separation_constant, main_ring)

        # Recalculate the next main ring size and repeat
        self.border_size = main_ring + max_placed_node_size
        self.max_ring = max(self.max_ring, self.border_size)

        self.go()

