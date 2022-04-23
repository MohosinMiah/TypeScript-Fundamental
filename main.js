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
 */
var message_two;
message_two = "abc";
var isendwithc = message_two.endsWith("c");
var isendwithcotherway = message_two.endsWith("c");
console.log(isendwithcotherway);
