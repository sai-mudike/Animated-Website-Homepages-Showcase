var cursor = document.querySelector(".cursor")
var cursorBlur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", (dets) => {
    cursor.style.top = dets.y + "px";
    cursor.style.left = dets.x + "px";

})


gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2


    }
})
gsap.to(".wrapper", {
    backgroundColor: "rgba(0, 0, 0, 0.979)",
    duration: 1,
    scrollTrigger: {
        trigger: ".wrapper",
        scroller: "body",
        start: "top -30%",
        end: "top -65%",
        // markers: true,
        scrub: 3
    }
})
gsap.to(".page1 .arrow i", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 0.4
})
gsap.to(".page5 .left", {
    x: 20,
    y: 25,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page5 .left",
        scroller: "body",
        start: "top 60%",
        end: "top 62%",
        // markers: true,
        scrub: 2
    }
})
gsap.to(".page5 .right", {
    x: -20,
    y: -25,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page5 .left",
        scroller: "body",
        start: "top 35%",
        end: "top 33%",
        // markers: true,
        scrub: 2
    }
})

gsap.from(".page6 h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".page6 h1",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        // markers: true,
        scrub: 2
    }

})

👋 Hi there!

I've got something cool in my GitHub repository. It's like a treasure chest where I've recreated a webpage from a place called Sidcup Family Golf 🌐. You know, it's like making your own version of a puzzle!

To make it all happen, I used some special tools like HTML, CSS, and a bit of JavaScript.These are like the building blocks that make websites look and behave in certain ways.

Feel free to take a look at what I've done. You'll find how I made things move and look interesting on the page.Remember, this is a way for me to learn more about how websites work 💻🚀.

If you're curious about the original inspiration, check out the Sidcup Family Golf website here: https://sidcupfamilygolf.com/.

Have fun exploring, and feel free to drop by anytime to see what I've created! 🏌️‍♂️🎨