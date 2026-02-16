# Mapping Wikipedia

## About The Project
This project was started with the inspiration I got from adumb's graphing Wikipedia [video](https://www.youtube.com/watch?v=JheGL6uSF-4&t=3s) and Map of Reddit.

Here is a basic breakdown of how this all works:

All of the data is collected from Wikimedia data dumps. Then, with some basic Python scripts, everything is parsed into a CSV file. The graph data from the CSV files is loaded into the Python code using igraph (I was able to fit 1 Million nodes and 160 Million? edges, which nearly took all memory. This is why you should use dedicated tools for this, not plain Python). 

After sorting out the data, I performed community detection on all the data using Leiden's algorithm from [this package](https://github.com/vtraag/leidenalg). Now here it gets a little weird. Early on, I dabbled with graphing tools a lot (like Gephi), which were either impossible to render due to the size or limited in the features I wanted. Normally, graphs like this are rendered using force-directed algorithms. However, I had no idea how I would make it work since implementing one myself looked grim, and all other existing tools didn't exactly give what I wanted. Instead, I had the brilliant idea of making one myself /s. 

The custom graph layout is a simple algorithm that arranges nodes in either a random or spiral pattern. The reason it looks like similar communities are together is that I apply Leiden's alg hierarchically. Basically, I first perform Leiden's alg on the entire data. Say that gives 15 distinct communities, these are randomly or in spiral placed in the circle (also, I make sure there is no overlap). Then I do the exact same thing on every sub-community. This worked out to some extent, but it is nothing close to actual graphing algorithms.

The last stage is the WebGL renderer. I initially started with Matplotlib, but that only goes so far. After looking at Map of Reddit's source code and learning cosmos.gl exists, I understood that WebGL was the way to go. WebGL wise, It was two simple shaders adapted from the Map of Reddit code (circles and MSDF text). Then I created a small website for all the user interactions. Finally as a last update, I switched to Three.js because less code with the same functionality is something I love.  

Just as a heads up, when I was first working on this, I used AI generated code extensively without understanding the basics of graphics and webdev. Because of the guilt of not understanding and not writing the code, I have since properly learned things and rewrote the entire code.  

That's it. I hereby declare this project complete. I want to do this bigger and better after learning how to apply force-directed layouts for millions of nodes and edges using GPU/AI. But till then, I'll just fix small things and reorganize code. 

Since I've done this project, I have come across better ways to map this data. I encourage you to check them out if you are interested in large scale data viz:

- Turns out that graphing Wikipedia is a [popular thing](https://github.com/search?q=wikipedia+graph&type=repositories&ref=advsearch&s=updated&o=desc&p=1)

- https://lmcinnes.github.io/datamapplot_examples/wikipedia/ (Runs slower but way more accurate and complete in terms of clustering articles. Uses AI embedding magic)

- [cosmograph/cosmos.gl](https://github.com/cosmosgl/graph) is one of the best frameworks out there for large scale data viz. Namely, see https://eightyeightthirty.one/ for a cool application. 

## TODO (For the graph layout)

- ~~Fix community detection (needs to be more accurate)~~
- ~~Placing communities non randomly -> cluster using force-directed or somehow using the similarity between communities -> I have a plan for this -> hierarchal layout -> completely switching to force-directed layouts~~
- ~~rewrite the entire code - Very High Priority -> In progress _> Done!~~
- ~~Fix labels -> no improvement -> will solve this by using an interactive renderer on the browser~~
- ~~interactive website? -> Would it solve the problem of labels and edges -> Webgl renderer? -> Proof of concept is done it seems to work~~
- Create a new layout (force-directed) -> new project

## TODO (For the renderer)

 - ~~Understand instanced rendering and create circles (Tested up to 5 million with no issues)~~
 - ~~instanced MSDF text rendering for text placement, which is harder than I thought, but it is possible. Working on it -> Done!~~
 - ~~resize canvas~~
 - ~~The actual Wikipedia page pops out from the left side -> Literally will just embed the Wiki page~~
 - ~~Structure code - > Done for now -> I have to structure again -> Done -> AGAIN -> beyond repair -> good enough for now~~
 - ~~Improved memory management~~
 - ~~screen space to world space (for clicking and text optimization)~~
 - ~~Make it usable for mobile -> Partly done~~
 - ~~Implement a web worker for fuzzysort~~
 - ~~Create better UI / Rewrite the entire codebase -> Done part 1 -> Done part 2 -> Complete rewrite~~

## Photos

Many of these photos are from the first iterations, now the best way to view them is by using the renderer. Although I will update some of these and just keep it here anyway.

Most 60k popular articles from September 11, 2024 (Singular Layout). Each Island indicates a different community. To see everything, you need to download the file and zoom in.

![4th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_4.png)

The latest iteration, has 500k nodes (Hierarchal layout) (It also has the 1 million node version in the Images directory, but you can only see things when zoomed in due to sheer massiveness) 

![6th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_6.png)

Hierarchal layout with 60k nodes

![6.5th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_6.5.png)



## License & Attribution
Parts of this project are based on code from [Map of Reddit](https://github.com/anvaka/map-of-reddit) ([Andrei Kashcha](https://github.com/anvaka)), used under the MIT License.


