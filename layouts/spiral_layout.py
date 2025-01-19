import math

class SpiralLayout:
    """Arranges nodes in a spiral layout, attempting to avoid overlaps."""

    def __init__(self, nodes):
        """
        Initializes the spiral layout.

        Args:
            nodes: A list of tuples, where each tuple contains (size, data).
            axis_limits: Unused parameter, consider removing.
        """
        self.nodes = nodes[:] # Create a copy to avoid modifying the original list.
        self.coordinates = [[0, 0, self.nodes[0][1]]]  # Initialize with the center node.
        self.border_size = self.nodes[0][0] #Initialize the border size.
        self.nodes.pop(0) #Remove the first node after placing it.
        self.max_radius = self.border_size
        self.relief_constant = 0

        while(len(self.nodes)!=0):
            self._arrange_nodes()

    def _get_intersections(self, x0, y0, r0, x1, y1, r1):
        """Calculates intersection points of two circles."""
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

    def _get_occupying_radians(self, x, y, x1, y1):
        """Calculates the angular difference between two points."""
        angle1 = math.atan2(y, x)
        angle2 = math.atan2(y1, x1)
        angle1, angle2 = (angle2, angle1) if angle1 > angle2 else (angle1, angle2)
        return angle2 - angle1

    def _place_nodes_on_ring(self, node_list, separation_constant, main_ring):
        """Places nodes on a circular ring."""
        theta = 0
        for node_limit, data in node_list:
            x = main_ring * math.cos(theta)
            y = main_ring * math.sin(theta)
            if node_list.index([node_limit,data]) < len(node_list) - 1: #Check if it's not the last element
                next_node_limit = node_list[node_list.index([node_limit,data]) + 1][0]
                theta += (node_limit / 2) + separation_constant + (next_node_limit / 2)

            self.coordinates.append([x, y, data])

    def _arrange_nodes(self):
        """Recursively arranges nodes in a spiral."""
        if not self.nodes:
            return

        main_ring = self.border_size + self.relief_constant + self.nodes[0][0]

        total_occupy = 0
        separation_constant = 0
        node_list = []
        max_placed_node_size = 0

        #Copy the list to avoid issues with removing elements during iteration
        nodes_to_place = self.nodes[:]
        for node in nodes_to_place:
                intersection = self._get_intersections(0, 0, main_ring, 0, main_ring, node[0])
            
                ix0, iy0, ix1, iy1 = intersection
                node_limits = self._get_occupying_radians(ix0, iy0, ix1, iy1)

                if node_limits + total_occupy <= 2 * math.pi:
                    total_occupy += node_limits
                    node_list.append([node_limits, node[1]])
                    self.nodes.remove(node)
                    max_placed_node_size = max(max_placed_node_size, node[0])
                else:
                    break

        if node_list: #Only calculate if there are nodes to place
            separation_constant = (2 * math.pi - total_occupy) / len(node_list)
            self._place_nodes_on_ring(node_list, separation_constant, main_ring)

        self.border_size = main_ring + max_placed_node_size
        self.max_radius = max(self.max_radius, self.border_size)


    def get_coordinates(self):
        """Returns the calculated coordinates."""
        return self.coordinates

    def get_max_radius(self):
        """Returns the maximum radius used."""
        return self.max_radius