// Robert Minkler
// Module 11.2 Assignment
// JavaScript Exercise, Part 3
// Dec 12, 2024


// After page load, add a submit listener to the form that calls addElement
window.onload = function () {
  document
    .getElementById("todoForm")
    .addEventListener("submit", addElement);
};

// create empty array to store the list
let listItems = [];

function addElement(event) {

  // prevent browser from reloading on submit
  event.preventDefault();

  // get text Input value
  let element = document.getElementById("textInput").value;

  // add element to the array
  listItems.push(element);

  // Alert the user indicating what was added to the list and where
  alert(
    "Items: " +
      element +
      " was added to the list at position " +
      listItems.length
  );
}

function deleteElement() {
  if (listItems.length == 0) {

    // alert the user that the list is empty
    alert("The list is empty. Nothing to remove.");

  } else {

    // remove the last item from the list and alert the user
    let itemRemoved = listItems.pop();
    displayElements();
  }
}

// Display elements in the array
function displayElements() {

  // start with an empty string
  let outputString = "";

  // build the output string using foreach() to loop through each array entry
  listItems.forEach(function (item, index) {
    outputString =
      outputString + "Item: " + ++index + " = " + item + "<br />";
  });

  // Place the output string in the placeholder div
  document.getElementById("output").innerHTML = outputString;
}