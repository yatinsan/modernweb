/////////////GSAP////////////
// simple scroll
// const headerAnim = gsap.to(".header_1", {
//   scrollTrigger: {
//     trigger: ".landing_page",
//     toggleActions: "play none reverse none",
//     // markers: true,
//     start: "20%",
//     end: "50%",
//   },
//   opacity: 0,
// });

////////////TEXT-1 sliding animation gsap//////////////////////////
const headerScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing_page",
    scrub: true,
    start: "+=750 100%",
    end: "+=200 0%",
    toggleActions: "play reverse play reverse",
  },
});

headerScroll.to(".header_1", { opacity: 1, duration: 1.5 }),
  headerScroll.to(".header_1", { opacity: 0, duration: 0.5 });
headerScroll.to(".header_2", { opacity: 1, duration: 1.5 }),
  headerScroll.to(".header_2", { opacity: 0, duration: 1.5 });
headerScroll.to(".header_3", { opacity: 1, duration: 1.5 }),
  headerScroll.to(".header_3", { opacity: 0, duration: 0.5, y: -50 });

// //TEXT-2
// const headerScroll = gsap.to(".header_2", {
//   scrollTrigger: {
//     trigger: ".landing_page",
//     scrub: true,
//   },
//   y: -40,
//   opacity: 0,
//   color: "#000",
//   duration: 1,
// });

//RELOAD PAGE AND THE SCROLL BAR GOES TO THE TOP
// $(document).ready(function () {
//   $(window).scrollTop(0);
// });
