import pandas as pd
import igraph as ig
import math
import layout_manager as la

node_data = pd.read_csv('../Graph_Data/top_2m_page_counts.csv')
edge_data = pd.read_csv('../Graph_Data/top_2m_page_edges.csv')
g = ig.Graph.TupleList(edge_data.itertuples(index=False), directed=False)

id_to_node = {}

for i in range(g.vcount()):
     id_to_node[g.vs[i]['name']] = i
     g.vs[i]['x'] = 0
     g.vs[i]['y'] = 0

#fix nodes with no links -> never happening
_max = node_data['count'].iloc[0]
for index, row in node_data.iterrows():

    page_id = int(row['page_id'])
    count = int(row['count'])

    if page_id in id_to_node:
     g.vs[id_to_node[page_id]]['size'] = (math.pow(count/_max, 0.5 ))
     g.vs[id_to_node[page_id]]['title'] = str(row['title'])

graph_params = {
    'partitioning': 'hierarchical',
    'resolution_parameter': 0.1,
    'axis_limits': None,
    'max_levels': 5,
    'level1': "spiral",
    'level2': "random_circle",
    'level3': 'random_circle',
    'level4': 'random_circle',
    'level5': 'random_circle',
    'level6': 'random_circle',
}

layout = la.LayoutManager(g, graph_params)
layout.apply_community_partitioning()
layout.save_layout('layout.csv')


