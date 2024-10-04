# Mapping Wikipedia

## Quick Rundown
The data is obtained from wikimedia dumps. Most of the data is given in a sql file but it takes way too long to import so the program just scrapes what is needed from the sql to a csv file. transform_to_graphy.py handles all the conversions to make it in a graph form. 

Igraph is used to make it easier to handle the graph. Community detection is based on the leiden algorithm but needs improvement as the current classification isn't accurate enough to my liking. 

The graph layout (layout_generator_v1) is something I randomly came up with. Basically it puts the biggest node in the center and spirals around without overlapping. Node sizes are determined by the pageviews of that article on a specific day

To visualize the data I am using matplotlib, this is also subject to change

## TODO
- Fix label sizes
- Fix community detection (needs to be more accurate) 
- Placing communuties non randomly
- Fix nodes with no links
- interactive website? -> would solve the problem of labels and edges
- rewrite the entire code (most of transform_to_graph is absolute garbage right now) - Priority
- optimize accesing node and edge attributes maybe switch to neo4j?
- create a new layout (force directed)
- Look into creating animations


## Photos
Most 250k popular articles from September 11, 2024. Each Island indicates a diffferent community. Too see everything you need to download the file and zoom in.
![Most 250k popular articles from september 11, 2024. Each Island indicates a diffferent community](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_2.png)


