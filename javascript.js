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
  headerScroll.to(".header_1", { opacity: 0, duration: 1 });
headerScroll.to(".header_2", { opacity: 1, duration: 2.5 }),
  headerScroll.to(".header_2", { opacity: 0, duration: 2.5 });
headerScroll.to(".header_3", { opacity: 1, duration: 2.5 }),
  headerScroll.to(".header_3", { opacity: 0, duration: 1, y: -50 });

//TEXT-2
const imgChange = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: true,
    start: "+=7100 7200",
    end: "+=0 0%",
    markers: true,
  },
});

imgChange.to(".home_img", { visibility: "visible" }),
  imgChange.to(".home_img", { visibility: "hidden", duration: 1 });
imgChange.to(".soci_img", { visibility: "visible", duration: 1 }),
  imgChange.to(".soci_img", { visibility: "hidden", duration: 1 });

//repeat animation
var ww = $(window).width() + 300;

console.log(ww);

var rptTl = new TimelineMax();
rptTl.fromTo(
  ".anim-proj3",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-proj2",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-proj1",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);

rptTl.fromTo(
  ".anim-home3",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-home2",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-home1",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);

rptTl.fromTo(
  ".anim-crew3",
  20,
  { x: 1400 },
  { x: -4000, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-crew2",
  20,
  { x: 1400 },
  { x: -4000, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-crew1",
  20,
  { x: 1400 },
  { x: -4000, ease: Power0.easeNone, repeat: -1 },
  1
);

rptTl.fromTo(
  ".anim-proj1",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);

rptTl.fromTo(
  ".anim-soci3",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-soci2",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);
rptTl.fromTo(
  ".anim-soci1",
  20,
  { x: -4400 },
  { x: ww, ease: Power0.easeNone, repeat: -1 },
  1
);

//RELOAD PAGE AND THE SCROLL BAR GOES TO THE TOP
// $(document).ready(function () {
//   $(window).scrollTop(0);
// });

//////////////////////////////////
