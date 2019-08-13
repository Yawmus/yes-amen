export default () => [
  {
    id: '3',
    name: 'Website work 2: Judgement Day',
    date: 'August 13, 2019',
    body: [
      `Part of the process of porting this website over from its original hosting (Wix) is that every aspect has to be re-written/architected. Luckily in this day and age we have frameworks like React to ease the process.`,
      `I haven't done much in React prior to this project and did a lot of reading/experimenting to understand the component structure it uses. After an initial introduction, I added the packages react-router and react-redux to help with the heavy lifting. My developer friend told me a diatribe about how he hated redux since it's so boilerplate. Being a naysayer I used it anyway since it's mega-popular.`,
      `With redux, it took a minute to understand its work-flow in a way that made sense (applying it to MVC is probably the easiest way.) Integrating it went smoothly enough, but ran into a snag with the reducer where my components wouldn't update, even though the reducer received information. Turns out this was due to not using Object.assign to deep copy the object properties. In redux, when you simply mutate the data, shouldComponentUpdate doesn't work properly since it does a shallow quality check with the incoming props.`
    ],
    image: 'redux.webp',
  },
  {
    id: '2',
    name: 'Messing with HTML5 canvas - making millipede',
    date: 'August 10, 2019',
    body: [
      `I decided to start on another canvas game after making python due to the amount of information I was able to glean from that simple project.`,
      `Working with more complex game objects than before, I realized due to the variety of creatures/entities (props) that some inheritance would greatly abstract much of the code. Now, I have used JS classes before, but didnt really know how they worked under the hood, aside from the fact that they don't boil down to your run-of-the-mill class-based inheritance.`,
      `In an effort to get these objects to play nice, I learned, through a JS rabbit-hole, that JS objects are separated out into prototypes and objects. With prototypes being "static" across all objects inheriting from it and object fields being on a per-instance basis. In addition to this core JS methodology it turns out that functions and datatypes are simply derived from the "Function" or "Array" prototype. This makes more sense when reading classic Mozilla JS documentation that array functions are categorized as Array.prototype.forEach or w/e. For the time being, my plan is to implement the remainder of this Millipede project without using the syntactic sugar of ES6's class structure to more cement these concepts.`,
    ],
    image: 'millipede.png',
  },
  {
    id: '1',
    name: 'Website work',
    date: 'August 2, 2019',
    body: [
      `The comes a time in every man's life where he has yearning to grow his skills as a web developer.`,
      `My first step in my journey to grow my fullstack skills is to replace my old personal website (hosted by Wix.) And while this has served me well over the past couple years, it is a good vessel to design a site from scratch.`,
      `I chose Javascript as the I wanted to write the backend in. Mostly due to the fact that you can develop an entire full-stack environment using it. The framework I wanted to use was Hapi, whcich I've developed with before on the backend for a social media mobile app I supported. Hapi makes for very modular server development and has a lot of configuration options.`,
      `Before starting on this website, I knew that I wanted to support some sort of blog functionality so I could my thoughts could spill out somewhere. With this in mind I spent some time trying to figure out how to serve static content (like images) to the frontend. It didn't take long to find a Hapi plugin called Inert. I had an issue getting the route directory to not give a 404 error on everything it pointed to, but luckily there existed a called directory which simply displays a directory of (visible) content if there doesn't exist and index.html file.`,
      `Hot dog - images served!`
    ],
    image: 'hapi.png',
  },
]
