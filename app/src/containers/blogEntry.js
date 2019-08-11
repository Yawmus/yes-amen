export default () => [
  {
    id: '1',
    name: 'Messing with HTML canvas - Creating millipede',
    date: 'August 10, 2019',
    body: [
      `I decided to make another canvas game after python due to the amount of information I gleaned from that simple project.`,
      `Working with more complex objects than before, I realized that some inheritance would greatly abstract out some of the code from different creatures in the game. Now, I have used JS classes before, but didnt really know the implimcations of them under the hood aside from the fact that it isn't using object-oriented class-based inheritance.`,
      `Upon trial and error trying to get these objects to play nice, I learned through a JS rabbit-hole that JS objects are separated out into prototypes and objects. With prototypes being "static" across all objects inheriting from it and object fields being on a per-instance basis. In addition to this core JS methodology I also learned that functions and datatypes are simply derived from the "Function" or "Array" prototype. This makes more sense when reading mozilla JS documentation that array functions are categorized as Array.prototype.forEach or w/e. For the time being, my plan is to implement the remainder of this Millipede project without using the syntax sugar of ES6's class structure to more cement these concepts.`,
    ],
    image: 'millipede.png'
  },
]
