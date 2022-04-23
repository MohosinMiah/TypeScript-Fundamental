function log(message) {
  console.log(message);
}

log("Hello World");

// var vs let difference between them ****************
// var can be accessable for the outer parent but can not be acces without its scope
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
