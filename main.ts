function log(message) {
  console.log(message);
}

log("Hello World");

/**
 *********************    var vs let difference between them  ****************
 var can be accessable for the outer parent but can not be acces without its scope
*/

/**
function doSomeThingUsingVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(`Final Value = ${i}`);
}

doSomeThingUsingVar();

function doSomeThingUsingLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // We can not access without its scope i because it declared  using let .
  console.log(`Final Value = ${i}`);
}

doSomeThingUsingLet();
 */

/**
 *********************    Different Type in TypeScript  ****************
 */
/**

//  with Initialize
let count = 1;
count = "a"; // Error Type 'string' is not assignable to type 'number'.ts(2322)

// Without initialize , so we can use for any type
let anotherCount;
anotherCount = 1;

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4]; //  array that countain only number
let f: any[] = [1, 2, "a", true]; // array that contain any type of data

const colorRed = "red";
const colorGreen = "green";

enum Color {
  Red = "red",
  Green = "green",
}

let backgroundColor = Color.Red;
 */

/**
 *********************    Type Assertions in TypeScript  ****************
 

let message_two;
message_two = "abc";
let isendwithc = (<string>message_two).endsWith("c");
let isendwithcotherway = (message_two as string).endsWith("c");

console.log(isendwithcotherway);
*/

/**
 *********************    Arrow Functions in TypeScript  ****************


//  Without Using Arraow function features
function homeCountry(country) {
  console.log(country);
}

homeCountry("Bangladesh");

// Using Arrow Function features

let myHomeCountry = (country) => {
  console.log(country);
};

myHomeCountry("Bangladesh");
 */

/**
 *********************    Interface in (Custom Types) TypeScript  ****************
 

let drawPoint = ({ x, y }) => {
  console.log("X = " + x + " " + " Y = " + y);
};
drawPoint({
  x: 1,
  y: 2,
});

// Lets using Interface
interface PointA {
  x: number,
  y: number
}

let drowPointAnother = (point: Point) => {
  console.log("Point Interface X = " + point.x + " Y = " + point.y);
};
drowPointAnother({
  x: 1,
  y: 2,
});
*/

/**
 *********************    Class TypeScript  ****************
 */

// Lets using Interface
class PointB {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log("X = " + this.x + " Y = " + this.y);
  }
}

let obj = new PointB(1, 2);
// point.x = 11;
// point.y = 22;
obj.draw();
