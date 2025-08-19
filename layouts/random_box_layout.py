import math
import random

class RandomBoxLayout:
    """A layout that places circles randomly within a defined box."""
    def __init__(self, nodes, axis_limits):
        self.coordinates = []
        self.placed_circles = []
        self.axis_limits = axis_limits

        for i, (size, data) in enumerate(nodes):
            self._place_circle(size, data, i)

    def _place_circle(self, size, data, index):
        dbg = 0
        while True:
            x_offset = random.uniform(-self.axis_limits, self.axis_limits)
            y_offset = random.uniform(-self.axis_limits * 9 / 16, self.axis_limits * 9 / 16)

            dbg += 1
            print(index)
            if dbg % 1000 == 0:
                print(index, 'most likely stuck. Increase limits')
                self.axis_limits += size * 2

            if not self._check_boundaries(x_offset, y_offset, size) and not self._check_collision(x_offset, y_offset, size):
                self.placed_circles.append([x_offset, y_offset, size])
                self.coordinates.append([x_offset, y_offset, data])
                break

    def _check_collision(self, x_offset, y_offset, size):
        for cx, cy, radius in self.placed_circles:
            distance = math.sqrt((cx - x_offset) ** 2 + (cy - y_offset) ** 2)
            if distance < radius + size:
                return True 
        return False 

    def _check_boundaries(self, x_offset, y_offset, size):
        if (x_offset + size > self.axis_limits or
            x_offset - size < -self.axis_limits or
            y_offset + size > self.axis_limits * 9 / 16 or
            y_offset - size < -self.axis_limits * 9 / 16):
            return True
        return False

    def get_coordinates(self):
        return self.coordinates