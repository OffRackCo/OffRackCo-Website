// OFFRACK CO. Version 2

document.addEventListener("DOMContentLoaded", () => {

const heroTitle = document.querySelector(".hero h1");
const heroSub = document.querySelector(".hero h2");
const heroText = document.querySelector(".hero p");
const heroBtn = document.querySelector(".hero-btn");

const animatedItems = [
heroTitle,
heroSub,
heroText,
heroBtn
];

animatedItems.forEach((item,index)=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";

setTimeout(()=>{

item.style.transition="all 1s ease";

item.style.opacity="1";

item.style.transform="translateY(0)";

},300 + (index * 250));

});

});

// Product card animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},
{
threshold:0.2
});

document.querySelectorAll(".product-card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="all .8s ease";

observer.observe(card);

});

// Collection cards

document.querySelectorAll(".collection-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=
"0 0 25px rgba(255,126,189,.4)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

// Floating logo effect

const logo = document.querySelector(".logo");

let position = 0;

setInterval(()=>{

position += 0.05;

logo.style.transform =
`translateY(${Math.sin(position)*3}px)`;

},30);

// Smooth hover glow

document.querySelectorAll(".hero-btn,.instagram-btn")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow=
"0 0 20px #ff7ebd, 0 0 40px #ff7ebd";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

});

console.log("OFFRACK CO. Version 2 Loaded");