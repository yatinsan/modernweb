//the video scroll animation////////////////////////////////
const vidCls = document.querySelector(".projects");
const video = vidCls.querySelector("video");

const trig = document.querySelector("#container");
const tr = document.querySelector(".container");
const int = document.querySelector("#land");

//end section
const section = document.querySelector(".thisandthat");

//scrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 5000,
//   triggerElement: video,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(trig)
//   .addTo(controller);

//gsap // // //
// let scene = new ScrollMagic.Scene({
//   duration: 5000,
//   triggerElement: video,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(trig)
//   .addTo(controller);

//Scene2
// let scene2 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);

//Text
// const textAnim = TweenMax.fromTo(h1, 3, { opacity: 0 });

//video animation
// let accelAmount = 0.2;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", (e) => {
//   scrollpos = e.scrollPos / 1000;
// });

// const tl = setInterval(() => {
//   delay += (scrollpos - delay) * accelAmount;
//   console.log(scrollpos, delay);

//   video.currentTime = scrollpos;
// }, 33.3);
