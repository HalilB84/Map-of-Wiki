# Mapping Wikipedia

## Note
This project was inspired by adumb's graphing Wikipedia video (https://www.youtube.com/watch?v=JheGL6uSF-4&t=3s). The main goal behind the project is to create different graph visualizations and create an animation/interactable website version. There are many graphing frameworks out there, like Gephi, but I couldn't make it work the way I liked (honestly, I was just looking for an excuse to code a project). The current version of the project implements some layouts I came up with using the Leidens algorithm. Unlike in adumb's video, I used Leiden's algorithm to create the graph layout itself. The reason for this was that, unlike force-directed layouts, it runs significantly faster and has other features many other algorithms lack (no overlapping, for example) 

The algorithm I cooked up doesn't make much sense as it is not supposed to be used for layouts, but it does look cool (which is what we all care about, right?)
Although I am not satisfied with the looks compared to other actual layouts so I am in the works of adding a proper force-directed algorithm, but it will require a lot of research. 

Finally, I would like to add that this is the first project that I have worked on for more than a single day, so I am in the process of learning things. I assume my code structure and how some things are implemented are not the best. Hopefully, I will have time to fix those. 

## Quick Rundown
All of the data is collected from Wikimedia dumps. Igraph is used to make it easier to handle data, and the backbone of the project relies on the Leiden algorithm package for Python. The layout of the graph is custom-built, and finally, the rendering is done by Matplotlib. Recently also implemented a interactive webgl renderer (not really interactive but working on it, also as an excuse to learn graphics). The webgl renderer is WIP

Right now, there are two layouts possible, "singular" and "hierarchal." These two modes place nodes based on spiral_layout.py and random_circle_layout.py. You will see the results in the photos section below. I would argue that the hierarchal layout looks cool and more "galaxy" like.  


## TODO (For getting the graph layout)

- ~~Fix community detection (needs to be more accurate)~~
- ~~Placing communities non randomly -> cluster using force-directed or somehow using the similarity between communities -> I have a plan for this -> hierarchal layout -> completely switching to force-directed layouts~~
- ~~rewrite the entire code - Very High Priority -> In progress _> Done!~~
- ~~Fix labels -> no improvement -> will solve this by using a interactive renderer on the browser~~
- interactive website? -> Would it solve the problem of labels and edges -> Webgl renderer? -> Proof of concept is done it seems to work
- Optimize accessing node and edge attributes, and maybe switch to neo4j? -> needs research
- create a new layout (force-directed) -> needs extensive research
- Look into creating animations -> need to have a force-directed layout
- highly possible change of switching to wikitext parsing for better layout results 

## TODO (For the webgl renderer)

 - ~~Understand instanced rendering and create circles (Tested upto 5 million with no issues)~~
 - ~~instanced MSDF text rendering for text placement, harder than I thought but it is possible. Working on it -> Done!~~
 - Projection matrix bug fix
 - Actual wikipedia page pop out from the left side -> Literally will just embed the wiki page
 - Structure code - > Done for now -> I have to structure again looool
 - Improved memory management -> Priority as this is the main culprit for the 500k layout -> deload csv files and remove duplicate data 
 - Make it usable for mobile
 - After getting the webgl renderer to a reasonable state I am just planning to move on. Although its been fun, I want to move on to another project. 


## Webgl Renderer!

![Im sorry github servers](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/Demo.mp4)


## Photos

Many of these photos are from the first iterations, now the best way to view them is by using the Webgl renderer. Although I will update some of these and just keep it here anyways.

Most 60k popular articles from September 11, 2024 (Singular Layout). Each Island indicates a different community. To see everything, you need to download the file and zoom in.

![4th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_4.png)

Another iteration (Quality dropped because the file size is too big for GitHub)

![5th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_5_lowered.png)

Latest iteration, 500k nodes (Hierarchal layout) (It also has the 1 million node version in the Images directory, but you can only see things when zoomed in due to sheer massiveness) 

![6th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_6.png)

Hierarchal layout with 60k nodes

![6.5th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/Images/iteration_6.5.png)


