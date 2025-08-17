console.log("This is seperate JS file");
// sometime we will use it in the button with onclick
function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3 another

const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// final option , important
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
