
// gsap.to('#box1',{
//     x:1200,
//     duration:3,
//     delay:2
// })


// gsap.to('#box2',{

//    x:500,
//    y:500,
//    duration:2,
//    delay:2
// })



gsap.from('#page1 #ribanafita',{

  duration:3,
  x:1200,
  scrollTrigger:{
    trigger:"#page1 #ribanafita",
    scroller:"body",
    start:"top 60%",
    end:"top 20%",
    scrub:2
  }
   
})


gsap.from("#page2 #box1", {
  duration: 3,
  //rotate:720,
  width: 20,
  height: 20,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: " #page2 #box1",
    scoller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});
gsap.from("#page2 #box2", {
  width: 40,
  height:40,
  duration: 3,
  delay: 2,
  rotate: 360,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: "#page2 #box2",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    scrub: 2
  },
});


gsap.from('#page3 #boxr',{
    

    duration:4,
    delay:1,
    rotate:720,
    scrollTrigger:{

        trigger:"#page3 #boxr",
        scroller:"body",
        start:"top 60%",
        end:"top 20%",
        scrub:2
    }

})

gsap.from("#page4 #poster1", {
  x: 1000,
  y: 800,
  duration:3,
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "body",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,

  },
});


gsap.from("#page4 #poster2", {
  x: -1000,
  y: 800,
  duration:3,
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "body",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
   
  },
});


gsap.from("#page5 #textl", {
  duration: 2,
  y: 200,
  scrollTrigger: {
    trigger: "#page5 #textl",
    scroller: "body",
    start: "top 50%",
    end: "top 10%",
    // markers: true,
    scrub:3
  },
});