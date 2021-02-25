// Typewriter FX
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Vincent Bezault", "Web Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/* Hamburger Navbar */
var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});

/* MEDIA QUERIES */
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.querySelector(".typed-text").style.fontSize = "3.5rem";
    document.querySelector("button").style.left = "85%";
    document.querySelector("button").style.top = "5%";
    document.querySelector("h3").style.fontSize = "20px";
    document.querySelector(".titleContainer").style.top = "-100px";
  } else {
    document.querySelector(".typed-text").style.fontSize = "6rem";
    document.querySelector("button").style.left = "94%";
    document.querySelector("button").style.top = "9%";
    document.querySelector("h3").style.fontSize = "25px";
    document.querySelector(".titleContainer").style.top = "-30px";
  }
}

var x = window.matchMedia("(max-width: 1100px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

/* Carousel */
var tz = Math.round( ( cellSize / 2 ) /
  Math.tan( ( ( Math.PI * 2 ) / numberOfCells ) / 2 ) );
// or simplified to
var tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );