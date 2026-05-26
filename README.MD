# Mapping Wikipedia

## About The Project
This project was started with the inspiration I got from adumb's graphing Wikipedia [video](https://www.youtube.com/watch?v=JheGL6uSF-4&t=3s) and Map of Reddit.

Here is a basic breakdown of how this all works:

All of the data is collected from Wikimedia [data dumps](https://dumps.wikimedia.org/backup-index.html). Then everything is parsed into CSV files from the SQL format provided by the dumps. The reason for this is that, for the scope of this project, it was simply easier to deal with CSV files. However, do note that the current way of loading the entire graph via igraph takes up a lot of memory. For better perf, more specialized tools like Neo4j would probably be better.

I dabbled with graphing tools a lot (like Gephi), which were either impossible to render due to the size or limited in the features I wanted. Normally, graph layouts are calculated using force-directed algorithms. However, I had no idea how I would make it work since implementing one myself looked grim, and all other existing tools didn't exactly give what I wanted. Instead, I had the brilliant idea of making one myself /s. 

The placement of the articles is done using community detection (Leiden's algorithm from [this package](https://github.com/vtraag/leidenalg)). The reason it looks like similar communities are together is that I apply Leiden's alg hierarchically. Basically, I first perform Leiden's alg on the entire data. Say that gives 15 distinct communities, which are placed randomly or in a spiral. Then I do the exact same thing on every sub-community. This worked out to some extent, but it is nothing close to actual graphing algorithms.

The last stage is the WebGL renderer. The idea of the renderer is the same as the Map of Reddit ([see point and msdf shaders](https://github.com/anvaka/map-of-reddit/tree/main/src/lib)), but in Three.js. Every article is a quad with instancing, and the text rendering comes from troika three text. The rest of the website is under the render folder.

Just as a heads up, when I was first working on this, I used AI generated code extensively without understanding the basics of graphics and webdev. Because of the guilt of not understanding and not writing the code, I have since properly learned things and rewrote the entire code. Putting this here for future reference as it was a big life lesson to me.

That's it. I hereby declare this project complete. I want to do this bigger and better after learning how to apply force-directed layouts for millions of nodes and edges using GPU/Compute/ML techniques.


Since I've done this project, I have come across better ways to map this data. I encourage you to check them out if you are interested in large scale data viz:

- Turns out that graphing Wikipedia is a [popular thing](https://github.com/search?q=wikipedia+graph&type=repositories&ref=advsearch&s=updated&o=desc&p=1)

- https://lmcinnes.github.io/datamapplot_examples/wikipedia/ (Runs slower but way more accurate and complete in terms of clustering articles. Uses embeddings for placement.)

- [cosmograph/cosmos.gl](https://github.com/cosmosgl/graph) is one of the best frameworks out there for large scale data viz. Namely, see https://eightyeightthirty.one/ for a cool application. 

---

<details>
  <summary>Todos</summary>

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

</details>

## Photos

Most 60k popular articles from September 11, 2024 (Singular Layout).

![4th Iteration, with edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_4.png)

500k articles (Hierarchal layout) (It also has the 1 million node version in the Images directory, but you can only see things when zoomed in due to sheer massiveness)

![6th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_6.png)

Hierarchal layout with 60k nodes

![6.5th Iteration, without edges](https://github.com/HalilB84/Map-of-Wiki/blob/main/images/iteration_6.5.png)

## License & Attribution
Parts of this project are based on code from [Map of Reddit](https://github.com/anvaka/map-of-reddit) ([Andrei Kashcha](https://github.com/anvaka)), used under the MIT License.


