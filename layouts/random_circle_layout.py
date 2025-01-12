import math
import random

class RandomCircleLayout:
    """Places circles randomly within a circular area, avoiding overlaps."""

    def __init__(self, nodes):
        """
        Initializes the layout with nodes.

        Args:
            nodes: A list of tuples, where each tuple contains (size, data).
        """
        self.placed_circles = []
        self.radius = nodes[0][0]  # Initial radius based on the first node
        self.max_radius = self.radius #Keeps track of the largest radius encountered.
        self.coordinates = []
        self.ring = 1

        for i, (size, data) in enumerate(nodes):
            self._place_circle(size, data, i)

    def _place_circle(self, size, data, index):
        """Places a single circle, handling collisions."""
        dbg = 0
        while True:
            dbg += 1
            if dbg % 1000 == 0:
                print(index, 'Most likely stuck in infinite loop. Increasing radius')
                self.radius += size * 2
                self.max_radius = max(self.max_radius, self.radius) #Update max radius if needed

            x, y = self._generate_random_point(size)

            if not self._check_collision(x, y, size):
                self.placed_circles.append([x, y, size])
                self.coordinates.append([x, y, data])
                break

    def _generate_random_point(self, size):
        """Generates a random point within the current circle."""
        theta = random.uniform(0, 2 * math.pi)
        r = math.sqrt(random.uniform(self.ring, 1)) * (self.radius - size) #Ensure new circle is within the radius.
        x = r * math.cos(theta)
        y = r * math.sin(theta)
        return x, y

    def _check_collision(self, x, y, size):
        """Checks for collisions with existing circles."""
        for cx, cy, cradius in self.placed_circles:
            distance = math.sqrt((cx - x) ** 2 + (cy - y) ** 2)
            if distance < cradius + size:
                return True  # Collision detected
        return False  # No collision

    def get_coordinates(self):
      """Returns the calculated coordinates."""
      return self.coordinates

    def get_max_radius(self):
      """Returns the maximum radius used during placement."""
      return self.max_radius