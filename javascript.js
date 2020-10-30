/////////////GSAP////////////
// simple scroll
const headerAnim = gsap.to(".header_1", {
  scrollTrigger: {
    trigger: ".landing_page",
    toggleActions: "play none reverse none",
    // markers: true,
    start: "20%",
    end: "50%",
  },
  opacity: 0,
});

//////////////////////////////////////header_1 sliding animation gsap
// const headerScroll = gsap.to(".header_1", {
//   scrollTrigger: {
//     trigger: ".landing_page",
//     scrub: true,
//     start: "center",
//   },
//   x: -300,
//   opacity: 0,
//   duration: 1,
//   pin: true,
// });
//Tweenlite color change

////////////////////////////////////////
//color changing animation
// const trig = gsap.to(".container", {
//   ScrollTrigger: {
//     trigger: ".projects",
//   },
// });

// TweenLite.to(".container", {
//   ScrollTrigger: {
//     trigger: ".projects",
//     start: "top top",
//     scrub: true,
//   },
//   backgroundColor: "rgb(0, 0, 0)",
// });

// const color = gsap
//   .timeline({ paused: true })
//   .set(".container", {
//     backgroundColor: "rgb(0, 0, 0)",
//     fontFamily: "Cutive Mono",
//   })
//   .set(".header_1", { color: "#fff" })
//   .set("a", { color: "#fff", fontWeight: "300" })
//   .set(".logo", { color: "#fff" });

// ScrollTrigger.create({
//   trigger: ".header_1",
//   scrub: true,
//   start: "top top",
//   onEnter: () => color.play(),
//   onEnterBack: () => color.reverse(),
// });

///////////////////////////////////////
//video animation
// const intro = document.querySelector(".landing_page");
// const vidCls = document.querySelector(".projects");
// const video = vidCls.querySelector("video");

// const scene = ScrollTrigger({ trigger: 'intro'},
//   hei: 9000,

// )

//RELOAD PAGE AND THE SCROLL BAR GOES TO THE TOP
$(document).ready(function () {
  $(window).scrollTop(0);
});

// //scroll Refresh
// window.addEventListener("load", function () {
//   gsap.registerPlugin(ScrollTrigger);
//   ScrollTrigger.refresh();
// });

//scrollmagic
