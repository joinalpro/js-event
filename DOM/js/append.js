// Parent Node
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

// create child node

const placeSelection = document.createElement("section");

// create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placeSelection.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Shundorbon";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Bandorbon";
ul.appendChild(li2);

placeSelection.appendChild(ul);

// 3. append placeSection to the mainContainer
mainContainer.appendChild(placeSelection);

// easier to crate HTML

const booksSection = document.createElement("section");
booksSection.innerHTML = `
 <h1>Book I want to read this August</h1>
 <li>Lean Startup</li>
 <li>high performance entrepreneur</li>
 <li>Start with Why</li>
 <li>I like Math</li>
`;
mainContainer.appendChild(booksSection);
