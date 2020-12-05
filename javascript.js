/////////////GSAP////////////
// simple scroll
// const staggerAnim = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "0%",
//     end: "200%",
//     toggleActions: "play reverse play reverse",
//   },
// });
// staggerAnim.from(
//   ".text-4",
//   0.5,
//   {
//     opacity: 0,
//     x: 100,
//     ease: Power4.out,
//     skewY: 1,
//     stagger: {
//       amount: 0.4,
//     },
//   },
//   0.1
// );

////////////TEXT-1 sliding animation gsap//////////////////////////
const headerScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".first_page",
    scrub: true,
    start: "-12%",
    end: "150%",
    // markers: true,
    toggleActions: "play reverse play reverse",
    pin: true,
  },
});

headerScroll.from(".header_1", { opacity: 0, duration: 4, y: 20 }),
  headerScroll.to(".header_1", { opacity: 1, duration: 3, y: -70 });
headerScroll.from(".header_2", { opacity: 0, duration: 4.5, y: 20 }),
  headerScroll.to(".header_2", { opacity: 1, duration: 4.5, y: -50 });
headerScroll.from(".and", { opacity: 0, duration: 4.5, x: -20 }),
  headerScroll.to(".and", { opacity: 1, duration: 4 });
headerScroll.from(".header_3", { opacity: 0, duration: 4.5, y: 20 }),
  headerScroll.to(".header_3", { opacity: 1, duration: 4, y: -50 });

//fade away
headerScroll.to(".header_1", { opacity: 0, duration: 4, x: 70 });
headerScroll.to(".header_2", { opacity: 0, duration: 4, x: 50 });
headerScroll.to(".and", { opacity: 0, duration: 4.5, x: -50 });
headerScroll.to(".header_3", { opacity: 0, duration: 1, x: 50 });

//TEXT-2  ANIMATIONS
const smlAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing_page",
    // scrub: true,
    // start: "0%",
    // end: "200%",
    // markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

smlAnim.from(".logo", { y: -200, opacity: 0, duration: 1 }, 1);
smlAnim.from(".navigation", { x: 100, opacity: 0, duration: 1 }, 1);
smlAnim.from(
  ".circular-text",
  { x: 100, opacity: 0, duration: 1, rotate: -90, scale: 2 },
  1.5
);
smlAnim.fromTo(
  ".main_text1",
  { y: -200, opacity: 0, skewY: -10 },
  { y: 0, opacity: 1, duration: 1.5, skewY: 0 },
  0.1
);
smlAnim.fromTo(
  ".main_text2",
  { x: 200, opacity: 0, skewY: 2 },
  { x: 0, opacity: 1, duration: 1.5, skewY: 0 },
  0.1
);
smlAnim.fromTo(
  ".main_line",
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0.1
);
smlAnim.fromTo(
  ".main_para",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0.1
);
smlAnim.fromTo(
  ".main_btn",
  { y: 150, opacity: 0, skewX: -10 },
  { y: 0, opacity: 1, duration: 1, skewX: 0 },
  0.3
);

////SCROLLREVEAL.JS 3rd PARTY PLUGIN//////////
// window.sr = new ScrollReveal();
// const rightSc = {
//   delay: 1,
//   origin: "right",
//   distance: "200px",
//   duration: 2000,
//   reset: true,
// };

// const bottomSc = {
//   delay: 1,
//   origin: "bottom",
//   distance: "200px",
//   duration: 2000,
//   reset: true,
// };

// const topSc = {
//   delay: 1,
//   origin: "top",
//   // distance: "200px",
//   duration: 2000,
//   reset: true,
// };

// sr.reveal(".main_text1", leftSc);
// sr.reveal(".main_text2", topSc);

// sr.reveal(".question_flex", leftSc);
// sr.reveal(".question_para", bottomSc);
// sr.reveal(".blur", scaleSc);

// sr.reveal(".proj_text2", opacity);
// sr.reveal(".proj_text3", opacity);

////////projects ANIMATION////////////////////////////

/////SECTION SNAPPING//////////////////
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".faq .faq_sub");

//head1
const head = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    ease: "none",
    start: "top top",
    // markers: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
  },
});

head.fromTo(".proj_text1", { opacity: 1 }, { opacity: 0, y: -500 });

//head2
const head2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".crew",
    ease: "none",
    start: "top top",
    // markers: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
  },
});

head2.to(".proj_text2", { opacity: 0, y: -500 });

//head3
const head3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gap2",
    ease: "none",
    start: "top top",
    // markers: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".gap2").offsetWidth / 5,
  },
});

head3.to(".proj_text3", { opacity: 0, y: -500 });

// // Is the same as...

//RELOAD PAGE AND THE SCROLL BAR GOES TO THE TOP
// $(document).ready(function () {
//   $(window).scrollTop(0);
// });

//////////////////////////////////
