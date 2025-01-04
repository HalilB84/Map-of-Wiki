import math
import random

class RandomBoxLayout:
    """Places circles randomly within defined limits, avoiding overlaps."""

    def __init__(self, nodes, axis_limits):
        """
        Initializes the layout with nodes and axis limits.

        Args:
            nodes: A list of tuples, where each tuple contains (size, data).
            axis_limits: The maximum absolute value for x and y coordinates.
        """
        self.coordinates = []
        self.placed_circles = []
        self.axis_limits = axis_limits

        for i, (size, data) in enumerate(nodes):
            self._place_circle(size, data, i)

    def _place_circle(self, size, data, index):
        """Places a single circle, handling collisions and boundary checks."""
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
        """Checks for collisions with existing circles."""
        for cx, cy, radius in self.placed_circles:
            distance = math.sqrt((cx - x_offset) ** 2 + (cy - y_offset) ** 2)
            if distance < radius + size:
                return True  # Collision detected
        return False  # No collision

    def _check_boundaries(self, x_offset, y_offset, size):
        """Checks if the circle is within the defined boundaries."""
        if (x_offset + size > self.axis_limits or
            x_offset - size < -self.axis_limits or
            y_offset + size > self.axis_limits * 9 / 16 or
            y_offset - size < -self.axis_limits * 9 / 16):
            return True #Out of Bounds
        return False #Within Bounds

    def get_coordinates(self):
        return self.coordinates