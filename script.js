console.log("Hello! If you see this, the script is working.");

/*
- [✓] Select the section with an id of container without using querySelector.
- [✓] Select the section with an id of container using querySelector.
- [✓] Select all of the list items with a class of "second".
- [✓] Select a list item with a class of third, but only the list item inside of the ol tag.
- [✓] Give the section with an id of container the text "Hello!".
- [✓] Add the class main to the div with a class of footer.
- [✓] Remove the class main on the div with a class of footer.
- [✓] Create a new li element.
- [✓] Give the li the text "four".
- [✓] Append the li to the ul element.
- [✓] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [✓] Remove the div with a class of footer.
*/

// Try rewriting this without using querySelector
const header = document.querySelector("#container");
console.log("header", header);

// Select the section with an id of container without using querySelector.
const noSelector=document.getElementById("container");
console.log("noSelector",noSelector);

// Select the section with an id of container using querySelector.
const getTheElement=document.querySelector("#container");
console.log("getTheElement",getTheElement);

// Select all of the list items with a class of "second".
const secondListItems=document.getElementsByClassName("second");
console.log("secondListItems",secondListItems);

// Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector('ol .third');

//Give the section with an id of container the text "Hello!".
document.getElementById("container").textContent = "Hello!";

// Add the class main to the div with a class of footer
const footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');

// Remove the class main on the div with a class of footer.
footerDiv.classList.remove('main');

// Create a new li element
const insertLi = document.createElement('li');

// Give the li the text "four".
insertLi.textContent = 'four';

// Append the li to the ul element.
document.querySelector('ul').appendChild(insertLi);

// Loop over all of the lis inside the ol tag and give them a background color of "green".
const ollis = document.querySelectorAll('ol li');

ollis.forEach(li => {
  li.style.backgroundColor = 'green';
});

// Remove the div with a class of footer.
const removeFoot = document.querySelector('div.footer');
removeFoot.remove();

