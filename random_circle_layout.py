import math
import random

class RandomCircleLayout:

    def __init__(self, partitioned_nodes, axis_limits):
        self.partitioned_nodes = partitioned_nodes
        self.coords = []
        self.placed_circles = []
        self.final_coords = []
        self.axis_limits = axis_limits

        for i in range(len(partitioned_nodes)):
            self.initialize(sorted(self.partitioned_nodes[i], key=lambda x: x[0], reverse=True))
            self.coords.append([self.max_ring, self.coordinates])
            print(i)

        self.coords = sorted(self.coords, key=lambda x: x[0], reverse=True)

        for i in range(len(self.coords)):
            main_size = self.coords[i][0]
            sorted_nodes = self.coords[i][1]  

            dbg = 0   

            # Randomly place communities in non-overlapping positions
            while True:
                x_offset = random.uniform(-self.axis_limits, self.axis_limits)
                y_offset = random.uniform(-int(self.axis_limits * 9 / 16), int(self.axis_limits * 9 / 16))

                dbg += 1
                print(i)
                if(dbg % 1000 == 0): 
                    print(i, 'most likely stuck in infinite loop. Increase limits')
                    self.axis_limits += main_size * 2

                escape = True
                if len(self.placed_circles) == 0: 
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

                if escape:
                    self.placed_circles.append([x_offset, y_offset, main_size])
                    break

            for j in range(len(sorted_nodes)):
                x = sorted_nodes[j][0] + x_offset
                y = sorted_nodes[j][1] + y_offset
                self.final_coords.append([x, y, sorted_nodes[j][2]])

    def initialize(self, nodes):
        self.random_placed_circles = []
        self.radius = nodes[0][0]
        self.max_ring = self.radius
        self.coordinates = []

         
        for i in range(len(nodes)):
                dbg = 0
                while True:
                    escape = True
                    theta = random.uniform(0, 2 * math.pi)
                    r = math.sqrt(random.uniform(0, 1)) * (self.radius-nodes[i][0])
                    x = r * math.cos(theta)
                    y = r * math.sin(theta)

                    dbg += 1
                    if dbg % 1000 == 0:
                        #print('most likely stuck in infinite loop. Increasing radius')
                        self.radius += nodes[i][0]*2
                        self.max_ring = max(self.max_ring, self.radius)

                    escape = True
                    for cx, cy, rad in self.random_placed_circles:
                        distance = math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
                        if distance < rad + nodes[i][0]:
                            escape = False
                            break

                    if escape:
                        self.random_placed_circles.append([x, y, nodes[i][0]])
                        self.coordinates.append([x, y, nodes[i][1]])  
                        break

