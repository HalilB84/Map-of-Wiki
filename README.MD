# Mapping Wikipedia

## Quick Rundown
The data is obtained from wikimedia dumps. Most of the data is given in a sql file but it takes way too long to import so the program just scrapes what is needed from the sql to a csv file. transform_to_graphy.py handles all the conversions to make it in a graph form. 

Igraph is used to make it easier to handle the graph. Community detection is based on the leiden algorithm but needs improvement as the current classification isn't accurate enough to my liking. 

The graph layout (spiral_layout.py) is something I randomly came up with. Basically it puts the biggest node in the center and spirals around without overlapping. Node sizes are determined by the pageviews of that article on a specific day. Also there is the random_circle_layout.py which is the same thing as above but the articles are randomly placed in a community. 

To visualize the data I am using matplotlib, this is also subject to change

## TODO
- ~~Fix community detection (needs to be more accurate)~~
- ~~Placing communuties non randomly -> cluster using force directed or somehow using the similarity between communities -> I have a plan for this -> hiererchal layout -> completely switching to force directed layouts~~
- Fix label sizes -> no improvement 
- interactive website? -> would solve the problem of labels and edges
- Fix nodes with no links 
- rewrite the entire code - Very High Priority -> In progress
- optimize accesing node and edge attributes maybe switch to neo4j? -> needs research
- create a new layout (force directed)
- Look into creating animations


## Photos
Most 60k popular articles from September 11, 2024. Each Island indicates a diffferent community. Too see everything you need to download the file and zoom in.

![4th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_4.png)

Another iteration (Quality dropped because file size is too big for github)
![5th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_5_lowered.png)

Latest iteration (Hierarchal layout, WIP) 
![6th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_6.png)

