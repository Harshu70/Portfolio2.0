function loco() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();


function upr_jane_wala_anime() {
    var asd = document.querySelectorAll(".uprjana")
    asd.forEach(function (elem) {
        let parent = document.createElement("span")
        let child = document.createElement("span")

        parent.classList.add("parent")
        child.classList.add("child")

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent); //kumar me dikkat
    })
}
upr_jane_wala_anime();

function loader() {
    var tl = gsap.timeline();
    tl
        .from("#black .child span", {
            x: 98,
            duration: 1.3,
            stagger: 0.1,
            delay: 0.5,
            ease: Power3.easeInOut
        })
        .from("#black .child .opa", {
            opacity: 0.3,
            delay: -1
        })
        .to("#black .parent .child", {
            y: "-100%",
            duration: 1.5,
            ease: Expo.easeInOut
        })
        .to("#black", {
            height: 0,
            duration: 1,
            delay: -0.7,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "100%",
            duration: 0.7,
            top: 0,
            delay: -1.2,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "0%",
            duration: .7,
            delay: -0.52,
            ease: Power3.easeOutIn
        })
        .from("#nav a", {
            y: "-100%",
            opacity: 0,
            stagger: 0.1
        })
        .from("#up .parent .child, #down .parent .child", {
            y: "100%",
            duration: 2.6,
            delay: -1.6,
            ease: Expo.easeInOut,
            stagger: 0.1
        })
        .from("#naya", {
            opacity: 0,
            duration: 1,
            delay: -0.5
        })
        .to(".bad, #web", {
            opacity: 1,
            duration: 1,
            delay: -1
        })
        .to("#strip", {
            opacity: 1,
            delay: -1
        })
        .from(".carda, #content-right", {
            opacity:0,
        })
        .from("#page3", {
            opacity: 0,
            duration: 1
        })
}
loader();

function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var day = h < 11 ? 'AM' : 'PM';
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
} var inter = setInterval(clock, 400);

function scrolll() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "50% 50%",
            end: "120% 50%",
            // markers: true,
            scrub: 2,
            pin: true
        }
    });
    tl2
        .to("#top", {
            top: "-50%",
            duration: 1.2

        }, 'h')
        .to("#niche", {
            bottom: "-50%",
            duration: 1.2
        }, 'h')
        .to("#toph1", {
            bottom: "-32%"
        }, 'h')
        .to("#nicheh1", {
            top: "-16%",
        }, 'h')
        .to("#content", {
            opacity: 1,
            scale: 1,
            duration: 1,
            // delay:0.5,
            top: "0%",
            height: "100%"
        }, 'h')
}
var deviceWidth = window.innerWidth;
var contt = document.querySelector("#content");
if(deviceWidth>600){
    scrolll();
} else{
    contt.style.opacity = 1
    contt.style.scale = 1
}

function workHover() {
    var work = document.querySelector(".work");

    var curse = document.querySelector("#pehla");
    var elm = document.querySelector("#pro-1");
    var infoKaP = document.querySelector(".pro-info p");

    elm.addEventListener("mousemove", function (dets) {
        curse.style.left = (dets.x - 24) + "px";
        curse.style.top = (dets.y - 26) + "px";
        work.style.backgroundColor = "#8a8988df";
        curse.style.opacity = 1
        infoKaP.style.opacity = 1
    })
    elm.addEventListener("mouseleave", function () {
        infoKaP.style.opacity = 0
        curse.style.opacity = 0
        work.style.backgroundColor = "#F2F2F2"

    })

    var curse2 = document.querySelector("#dusra");
    var elm2 = document.querySelector("#pro-2");
    var infoKaPpp = document.querySelector("#pro-info-chotka p");
    elm2.addEventListener("mousemove", function (dets) {
        curse2.style.left = (dets.x - 24) + "px";
        curse2.style.top = (dets.y - 26) + "px";
        curse2.style.opacity = 1;
        work.style.backgroundColor = "#18bdef76";
        infoKaPpp.style.opacity = 1
    })
    elm2.addEventListener("mouseleave", function () {
        curse2.style.opacity = 0
        infoKaPpp.style.opacity = 0
        work.style.backgroundColor = "#F2F2F2";
    })

    var curse3 = document.querySelector("#thisra");
    var elm3 = document.querySelector("#pro2-1");
    var infoKaP3 = document.querySelector("#pro-info-3 p");
    elm3.addEventListener("mousemove", function (dets) {
        curse3.style.left = (dets.x - 24) + "px";
        curse3.style.top = (dets.y - 26) + "px";
        curse3.style.opacity = 1
        infoKaP3.style.opacity = 1
        work.style.backgroundColor = "#FFC2007b";
    })
    elm3.addEventListener("mouseleave", function () {
        curse3.style.opacity = 0
        infoKaP3.style.opacity = 0
        work.style.backgroundColor = "#f2f2f2";
    })

    var curse4 = document.querySelector("#chrwa");
    var elm4 = document.querySelector("#pro3-1");
    var infoKaP4 = document.querySelector(".pro-info-4 p");
    elm4.addEventListener("mousemove", function (dets) {
        curse4.style.left = (dets.x - 24) + "px";
        curse4.style.top = (dets.y - 26) + "px";
        curse4.style.opacity = 1
        infoKaP4.style.opacity = 1
        work.style.backgroundColor = "#4B43358b"
    })
    elm4.addEventListener("mouseleave", function () {
        curse4.style.opacity = 0
        infoKaP4.style.opacity = 0
        work.style.backgroundColor = "#F2F2F2";
    })

    var curse5 = document.querySelector("#pachwa");
    var elm5 = document.querySelector("#pro3-2");
    var infoKaP5 = document.querySelector("#pro-info-5 p");
    elm5.addEventListener("mousemove", function (dets) {
        curse5.style.left = (dets.x - 24) + "px";
        curse5.style.top = (dets.y - 26) + "px";
        work.style.backgroundColor = "#C4A5A3";
        curse5.style.opacity = 1
        infoKaP5.style.opacity = 1
    })
    elm5.addEventListener("mouseleave", function () {
        curse5.style.opacity = 0
        infoKaP5.style.opacity = 0;
        work.style.backgroundColor = "#F2F2F2";
    })
}
if(deviceWidth>600){
    workHover();
}
function contentWala() {
    const root = document.documentElement;
    const card = document.querySelector(".carda");
    const timer = () => new Promise((res) => setTimeout(res, 40));
    async function spin() {
        let iq = 0;
        while (true) {
            root.style.setProperty("--angle", (iq += 6) + "deg");
            await timer();
            if (iq > 360) iq = 0;
        }
    }
    spin();

    function trans(event) {
        const xx = event.clientX;
        const yy = event.clientY;
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const offsetX = ((xx - middleX) / middleX) * 30;
        const offsetY = ((yy - middleY) / middleY) * 30;

        root.style.setProperty("--rotx", -1 * offsetY + "deg");
        root.style.setProperty("--roty", offsetX + "deg");
    }
    const pura = document.querySelector("#bich")
    pura.addEventListener("mousemove", (e) => {
        trans(e);
        root.style.setProperty("--pers", "1000px");
    })
    pura.addEventListener("mouseout", () => {
        root.style.setProperty("--rotx", "0deg");
        root.style.setProperty("--roty", "0deg");
        root.style.setProperty("--pers", "10000px");
    })
}
contentWala();

function eduScroll() {
    var tt = gsap.timeline({
        scrollTrigger: {
            trigger: "#education",
            scroller: "#main",
            start: "0% 50%",
            end: "50% 50%",
            scrub: 2
        }
    });
    tt
        .from(".edu-cla", {
            x: -100,
            opacity: 0,
            duration: 1.5,
            stagger: 1.5
        }, 'p')
        .from(".edu-info", {
            x: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 1.5
        }, 'p')
}
eduScroll();



function skillScroll() {
    var tle = gsap.timeline({
        scrollTrigger: {
            trigger: "#skill",
            scroller: "#main",
            start: "25% 50%",
            end: "40% 50%",
            scrub: 1
        }
    });
    tle
        .from(".box", {
            opacity: 1, 
            scale:0,
            duration:1
        })
        .from(".row1", {
            scale:0,
            opacity:0,
            y:-90,
            duration:1.5
        })
        // .to(".row1", {
        //     y:-20,
        //     duration:.7
        // })
        // .to(".row1", {
        //     y:0, 
        //     duration:.7
        // })
        .from(".row2", {
            scale:0,
            opacity:0,
            y:-90,
            duration:1
        })
        // .to(".row2", {
        //     y:-15,
        //     duration:.7
        // })
        // .to(".row2", {
        //     y:0, 
        //     duration:.7
        // })
        
}
skillScroll();

function footScroll(){
    var tlf = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "-30% 50%",
            end: "60% 50%",
            // markers: true,
            scrub: 1
        }
    });
    tlf
        .from("#foot-cir", {
            y:-100,
            duration:.5
        })
        .to("#foot-cir", {
            y: 100,
            duration:1
        },'as')
        .to("#foot-cir", {
            y: 400,
            duration:1
        }, 'as')
        .to("#foot-cir", {
            y: 401,
            duration:1
        }, 'as')
    
}
footScroll();
