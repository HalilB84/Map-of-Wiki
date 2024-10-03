# Mapping Wikipedia

## Quick Rundown
The data is obtained from wikimedia dumps. Most of the data is given in sql form but it takes way too long to import so the program just scrapes what is needed from the sql to a csv file. transform_to_graphy.py handles all the conversions to make it in a graph form. 

Igraph is used to make it easier to handle the gprah. Community detection is based on the leiden algorithm but needs improvement as the current classification isn't too accurate. 

The graph layout (layout_generator_v1) is something I randomly came up with. Basically it puts the biggest node in the center ans spirals around without overlapping. Node size are determined by the pageviews of that article on a specific day

To visualize the data I am using matplotlib, this is also subject to change

## TODO
- Fix label sizes
- Fix community detection (needs to be more accurate)
- Fix nodes with no links
- Edge bundling or making it look less like a hairball
- rewrite the code professionally (most of transform_to_graph is absolute garbage right now)
- create a new layout (force directed)
- Look into creating animations

## Photos

![Most 60k popular articles from september 11, 2024. Each color indicates a diffferent community](https://github.com/HalilB84/Map-of-Wiki/blob/main/test.png)


