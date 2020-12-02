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

headerScroll.to(".header_1", { opacity: 1, duration: 1 }),
  headerScroll.to(".header_1", { opacity: 0, duration: 1, y: -70 });
headerScroll.to(".header_2", { opacity: 1, duration: 2.5 }),
  headerScroll.to(".header_2", { opacity: 0, duration: 2.5, y: -50 });
headerScroll.to(".header_3", { opacity: 1, duration: 2.5 }),
  headerScroll.to(".header_3", { opacity: 0, duration: 1, y: -50 });

//TEXT-2  ANIMATIONS
const smlAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
    // start: "+=100% 150%",
    // end: "+=10% 100%",
    start: "0%",
    end: "200%",
    pin: true,
    markers: true,
    // toggleActions: "play reverse play reverse",
  },
});

// smlAnim.to(".proj_text1", { opacity: 0 });

////SCROLLREVEAL.JS 3rd PARTY PLUGIN//////////
window.sr = new ScrollReveal();
// const header1 = {
//   delay: 1,
//   origin: "left",
//   distance: "200px",
//   duration: 2000,
//   reset: true,
// };

const line = {
  delay: 1,
  origin: "top",
  distance: "200px",
  duration: 2000,
  reset: true,
};

const opacity = {
  delay: 1,
  origin: "top",
  distance: "200px",
  duration: 2000,
  reset: true,
};

// sr.reveal(".proj_text1", opacity);
// sr.reveal(".line", line);

// sr.reveal(".proj_text2", opacity);
// sr.reveal(".proj_text3", opacity);

////////FAQ ANIMATION////////////////////////////

/////SECTION SNAPPING//////////////////
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".faq .faq_sub");

//head1
const head = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    ease: "none",
    start: "top top",
    markers: true,
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
    markers: true,
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
    markers: true,
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
