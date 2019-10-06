const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

//* (class, time, {object}, {object})
//* from: hero(.hero in css), 1 sec duration, 0 height to 80%, ease in
tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})

//*  from: hero, 1.2 sec duration, 100% width to 80%, ease in
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})

//* from: slider, 1.2 sec, x axel -100% back to 0%, ease in, -=1.2 (adds time 1.2 sec)
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")

.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 40}, {opacity: 1, x: 0}, "-=0.5");