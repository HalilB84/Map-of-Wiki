import math
import random

class RandomCircleLayout:
    #just put circles randomly and check for collision although it has that ring thingy i never figured out. 
    def __init__(self, nodes):
        self.placed_circles = []
        self.radius = nodes[0][0] 
        self.max_radius = self.radius 
        self.coordinates = []
        self.ring = 1 

        for i, (size, data) in enumerate(nodes):
            self._place_circle(size, data, i)

    def _place_circle(self, size, data, index):
        dbg = 0
        while True:
            dbg += 1
            if dbg % 1000 == 0:
                print(index, 'most likely stuck. Increase limits')
                self.radius += size * 2
                self.max_radius = max(self.max_radius, self.radius)

            x, y = self._generate_random_point(size)

            if not self._check_collision(x, y, size):
                self.placed_circles.append([x, y, size])
                self.coordinates.append([x, y, data])
                break

    def _generate_random_point(self, size):
        theta = random.uniform(0, 2 * math.pi)
        r = math.sqrt(random.uniform(self.ring, 1)) * (self.radius - size)
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        return x, y

    def _check_collision(self, x, y, size):
        for cx, cy, cradius in self.placed_circles:
            distance = math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
            if distance < cradius + size:
                return True
        return False

    def get_coordinates(self):
      return self.coordinates

    def get_max_radius(self):
        return self.max_radius