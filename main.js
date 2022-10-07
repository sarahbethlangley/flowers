const flowers = [
  {
    id: 1,
    type: "Rose",
    colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
    price: 2.59,
    usdaZones: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    type: "Tulip",
    colors: ["Orange", "White", "Yellow", "Violet", "Red"],
    price: 1.04,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    type: "Daisy",
    colors: ["Gold", "White", "Orange", "Crimson"],
    price: 0.89,
    usdaZones: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    type: "Carnation",
    colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
    price: 1.59,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 5,
    type: "Bird of Paradise",
    colors: ["Orange", "White"],
    price: 2.33,
    usdaZones: [9, 10, 11],
  },
  {
    id: 6,
    type: "Delphinium",
    colors: ["Blue", "Violet", "White", "Pink"],
    price: 1.67,
    usdaZones: [3, 4, 5, 6, 7],
  },
  {
    id: 7,
    type: "Gladiolus",
    colors: [
      "White",
      "Cream",
      "Yellow",
      "Red",
      "Pink",
      "Green",
      "Lavender",
      "Voilet",
    ],
    price: 1.85,
    usdaZones: [6, 7, 8, 9, 10],
  },
  {
    id: 8,
    type: "Lilly",
    colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
    price: 1.52,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 9,
    type: "Chinese Lantern",
    colors: ["Orange"],
    price: 2.33,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
];

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/

/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
  const filteredFlowers = []; // Do not modify

  for (const flower of flowers) {
    if (flower.price < 2) filteredFlowers.push(flower);
  }

  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
  const filteredFlowers = []; // Do not modify

  for (const flower of flowers) {
    if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
  const filteredFlowers = []; // Do not modify

  for (const flower of flowers) {
    if (flower.colors.includes("Orange")) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/


//! this function will iterate through the array and pull out specific properties from each flower and then 
//! display them on the website super pretty with html stuff


const flowersAsHTML = () => {
  let flowersHTMLString = ""; // Do not modify

// / I want it to loop through and pull out each flower, their color, 
// and their usda zones and put it in one long String with html elements.  
// I need to interpolate the string and I need to concatenate the string.
// in order to pull from the array a specific property of the Object,
// I used a what I think of as dummy variable, flower of flowers, but 
// I need conditions around the dummy variable so it can plug in the 
// right property in the string when I interpolate it. I can use 
// dot notation
// to .push the information into the empty String.  
// I used .includes in the previous
// exercise as a condition to get very specific about 
// what property I was going to 
// pull out of flowers, and it goes like, three deep.  
// like flower.usdaZones.includes() -- like you can get specific 
// sooooooooooooooo.

//   for (const flower of flowers) {
// //? figure out how to combine strings -- concatenation 
  // flowersHTMLString.push(`<h1>${flower.type}</h1> \n\n <h2>Colors</h2> \n
  // <section>${flower.colors}</section> \n\n <h2>USDA Zones</h2> \n
  // <div>${flower.USDAzones}</div>  `)




    for (let flower of flowers){
        // if (flower.price < 3) 
        flowersHTMLString += `<article><h1>${flower.type}</h1></article>`
        for (const color of flower.colors) {
          flowersHTMLString += `<section>${color}</section>`
        }
        for (const zone of flower.usdaZones) {
          flowersHTMLString += `<div>${zone}</div>`
        }
    }
          
    return flowersHTMLString; // Do not modify
};

console.log(flowersAsHTML())


/*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */

/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers;
module.exports = {
  inexpensiveFlowers,
  orangeFlowers,
  zoneFlowers,
  flowersAsHTML,
};
/*  DO NOT TOUCH THIS CODE  */

