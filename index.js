//¯\_(ツ)_/¯ Why are you looking at my code? 
const body = document.body;
let loading = 1;
let inTransit = true;
document.body.style.cursor = "wait";
let showF = 0;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//page
const container = document.getElementById("container");

//JSneeded & Loading
const loadText = document.getElementById("loadText");
const JSnotice = document.getElementById("JSneeded");
const mainLogo = document.getElementById("mainLogo");
const shade1 = document.getElementById("shade1");
const shade1Text = document.getElementById("shade1Text");
shade1Text.innerHTML = "[... JS enabled. Loading website ...]";
function startPage() {
    //Split the text and prepare the opening animation
    const mainText = document.getElementById("main");
    const targetIds = ["location", "me", "furry", "repo", "scroll"];
    const nodes = Array.from(mainText.childNodes);
    let lineBuffer = [];
    const lineBlocks = [];
    for (const node of nodes) {
        if (node.nodeName === "BR") {
            lineBlocks.push([...lineBuffer]);
            lineBuffer = [];
        } else {
            lineBuffer.push(node);
        }
    }
    if (lineBuffer.length > 0) {
        lineBlocks.push([...lineBuffer]);
    }
    const newContent = lineBlocks.map((line, lineIndex) => {
        const result = document.createElement("div");
        let charIndex = 1;
        for (const node of line) {
            if (node.nodeType === Node.TEXT_NODE) {
                for (const ch of node.textContent) {
                    if (ch.trim() === "") {
                        result.appendChild(document.createTextNode(ch));
                    } else {
                        const span = document.createElement("span");
                        span.textContent = ch;
                        span.id = String.fromCharCode(97 + lineIndex) + charIndex++;
                        span.style.opacity = "0";
                        span.style.filter = "blur(0.2rem)";
                        result.appendChild(span);
                    }
                }
            } else if (
                node.nodeType === Node.ELEMENT_NODE &&
                node.tagName === "SPAN" &&
                targetIds.includes(node.id)
            ) {
                result.appendChild(node.cloneNode(true));
            } else {
                result.appendChild(node.cloneNode(true));
            }
        }
        return result.innerHTML;
    });
    mainText.innerHTML = newContent.join("<br>");

    setTimeout(() => {
        loadText.style.animation = "noscale-disappear 0.4s ease forwards";
        JSnotice.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            loadText.style.display = "none";
            JSnotice.style.display = "none";
            mainLogo.style.display = "block";
            setTimeout(() => {
                mainLogo.style.animation = "disappear 0.4s ease forwards";
                shade1.style.animation = "noscale-disappear 0.4s ease forwards";
                setTimeout(() => {
                    loading = 0;
                    inTransit = false;
                    document.body.style.cursor = "crosshair";
                    shade1.style.display = "none";
                    container.style.display = "block";
                    //Opening animation
                    const mainTextTimeline = gsap.timeline();
                    const animationTargetIds = ["location", "me", "furry", "scroll"];
                    mainTextTimeline.add(() => {
                        animationTargetIds.forEach((id, index) => {
                            const el = document.getElementById(id);
                            if (el) {
                                mainTextTimeline.to(el, {
                                    opacity: 1,
                                    filter: "blur(0rem)",
                                    duration: 0.4,
                                    ease: "power1.ease"
                                }, 0.2 + index * 0.4);
                            }
                        });
                    }, "+=0.2");
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll("span")).filter(span => /^a\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: "blur(0rem)",
                                duration: 0.4,
                                delay: i * 0.01,
                                ease: "power1.ease"
                            });
                        });
                    }, "+=1.4");
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll("span")).filter(span => /^b\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: "blur(0rem)",
                                duration: 0.4,
                                delay: i * 0.01,
                                ease: "power1.ease"
                            });
                        });
                    }, "<");
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll("span")).filter(span => /^c\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: "blur(0rem)",
                                duration: 0.4,
                                delay: i * 0.01,
                                ease: "power1.ease"
                            });
                        });
                    }, "<");
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll("span")).filter(span => /^d\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: "blur(0rem)",
                                duration: 0.4,
                                delay: i * 0.01,
                                ease: "power1.ease"
                            });
                        });
                    }, "<");
                }, 400);
            }, 1000);
        }, 400);
    }, 1000);
};

//transitionCanvas
const canvas = document.getElementById("transitionCanvas");
const ctx = canvas.getContext("2d");
let dpr = window.devicePixelRatio || 1;
function resizeCanvas() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
const STAR_COUNT = 100;
const DEPTH = 1000;
const FOCAL_LENGTH = 500;
const BASE_SPEED = 500;
const ROTATION_SPEED = 0.2;
let globalRotation = 0;
const stars = [];
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
class Star {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = randomRange(-1, 1);
        this.y = randomRange(-1, 1);
        this.z = randomRange(200, DEPTH);
        this.velocity = BASE_SPEED * randomRange(0.8, 1.2);
    }
    update(deltaTime) {
        this.z -= this.velocity * deltaTime;
        if (this.z <= 0) {
            this.reset();
            this.z = DEPTH;
        }
    }
    draw(rotation) {
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const rx = this.x * cos - this.y * sin;
        const ry = this.x * sin + this.y * cos;

        const scale = FOCAL_LENGTH / this.z;
        const sx = rx * scale * w * 0.5 + w * 0.5;
        const sy = ry * scale * h * 0.5 + h * 0.5;

        const tailZ = this.z + 60;
        const tailScale = FOCAL_LENGTH / tailZ;
        const tx = rx * tailScale * w * 0.5 + w * 0.5;
        const ty = ry * tailScale * h * 0.5 + h * 0.5;

        const fadeStart = 0.5;
        let alpha = 1 - (this.z / DEPTH - fadeStart) / (1 - fadeStart);
        alpha = Math.max(0, Math.min(1, alpha));
        alpha = Math.pow(alpha, 2);

        const gradient = ctx.createLinearGradient(sx, sy, tx, ty);
        gradient.addColorStop(0, `rgba(250,100,0,${alpha})`);
        gradient.addColorStop(1, `rgba(250,100,0,0)`);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(tx, ty);
        ctx.lineWidth = Math.max(1, 5 * alpha);
        ctx.strokeStyle = gradient;
        ctx.stroke();
    }
}
for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
}
let lastTime = performance.now();
function animate(now) {
    if (!inTransit) {
        lastTime = now;
        return;
    }
    const deltaTime = (now - lastTime) / 1000;
    lastTime = now;
    globalRotation += ROTATION_SPEED * deltaTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < STAR_COUNT; i++) {
        const star = stars[i];
        star.update(deltaTime);
        star.draw(globalRotation);
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

//main
const shade2 = document.getElementById("shade2");
const quit = document.getElementById("quit");

//locationBox
const lBox = document.getElementById("locationBox");
const map = document.getElementById("map");
const LL = document.getElementById("LL");
const SS = document.getElementById("SS");
const timeTitle = document.getElementById("timeTitle");
const localTime = document.getElementById("localTime");

//meBox
const meBox = document.getElementById("meBox");
const mePic = document.querySelectorAll(".mePicBox2");
const toLeft = document.getElementById("toLeft");
const toRight = document.getElementById("toRight");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const contactTitle = document.getElementById("contactTitle");
const contactBox = document.getElementById("contactBox");
const musicTitle = document.getElementById("musicTitle");
const musicShare = document.getElementById("musicShare");
const FavThingsTitle = document.getElementById("FavThingsTitle");
const FavThingsBox = document.getElementById("FavThingsBox");

//furryBox
const furryBox = document.getElementById("furryBox");
const FT1 = document.getElementById("FT1");
const FT2 = document.getElementById("FT2");
const FT3 = document.getElementById("FT3");
const FT4 = document.getElementById("FT4");
const FT4_1 = document.getElementById("FT4_1");
const FT4_2 = document.getElementById("FT4_2");
const furryAll1 = document.getElementById("furryAll1");
const furryAll2 = document.getElementById("furryAll2");
const furryPicBox1 = document.getElementById("furryPicBox1");
const furryPicBox2 = document.getElementById("furryPicBox2");

//repoBox
const repoBox = document.getElementById("repoBox");
const RT1 = document.getElementById("RT1");
const repoLogoBox = document.getElementById("repoLogoBox");
const RT2 = document.getElementById("RT2");
const repoPic1 = document.getElementById("repoPic1");
const repoPic2 = document.getElementById("repoPic2");
const repoPic3 = document.getElementById("repoPic3");
const repoPic4 = document.getElementById("repoPic4");
const repoPic5 = document.getElementById("repoPic5");
const RC1 = document.getElementById("RC1");
const repoSkillBox = document.getElementById("repoSkillBox");
const RT3 = document.getElementById("RT3");
const repoPic6 = document.getElementById("repoPic6");
const repoPic7 = document.getElementById("repoPic7");
const repoPic8 = document.getElementById("repoPic8");
const RC2 = document.getElementById("RC2");

quit.addEventListener("click", () => {
    shade2.style.animation = "noscale-disappear 0.2s ease forwards";
    container.style.animation = "appear 0.2s ease forwards";
    setTimeout(() => {
        shade2.style.display = "none";
        container.style.display = "block";

        lBox.style.display = "none";
        map.style.display = "none";
        LL.style.display = "none";
        SS.style.display = "none";
        timeTitle.style.display = "none";

        meBox.style.display = "none";
        toLeft.style.display = "none";
        toRight.style.display = "none";
        label1.style.display = "none";
        label2.style.display = "none";
        label3.style.display = "none";
        label4.style.display = "none";
        contactTitle.style.display = "none";
        contactBox.style.display = "none";
        musicTitle.style.display = "none";
        musicShare.style.display = "none";
        FavThingsTitle.style.display = "none";
        FavThingsBox.style.display = "none";

        furryBox.style.display = "none";
        FT1.style.display = "none";
        FT2.style.display = "none";
        FT3.style.display = "none";
        FT4.style.display = "none";
        FT4_1.style.display = "none";
        FT4_2.style.display = "none";
        furryAll1.style.display = "none";
        furryAll2.style.display = "none";
        showF = 0;
        furryPicBox1.style.display = "none";
        furryPicBox2.style.display = "none";

        repoBox.style.display = "none";
        RT1.style.display = "none";
        repoLogoBox.style.display = "none";
        RT2.style.display = "none";
        repoPic1.style.display = "none";
        repoPic2.style.display = "none";
        repoPic3.style.display = "none";
        repoPic4.style.display = "none";
        repoPic5.style.display = "none";
        RC1.style.display = "none";
        repoSkillBox.style.display = "none";
        RT3.style.display = "none";
        repoPic6.style.display = "none";
        repoPic7.style.display = "none";
        repoPic8.style.display = "none";
        RC2.style.display = "none";
    }, 200);
});

//locationBox
function updateLocalTime() {
    var time = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    localTime.innerHTML = time;
};
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "location") {
        window.lenis.scrollTo(0);
        updateLocalTime();
        setInterval(updateLocalTime, 1000);
        shade2.style.animation = "appear 0.2s ease forwards";
        container.style.animation = "disappear 0.2s ease forwards";
        setTimeout(() => {
            shade2.style.display = "block";
            container.style.display = "none";
        }, 200);
        lBox.style.display = "block";
        map.style.animation = "fromL 0.4s ease forwards";
        setTimeout(() => {
            map.style.display = "block";
        }, 400);
        LL.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            LL.style.display = "block";
        }, 400);
        SS.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            SS.style.display = "block";
        }, 400);
        timeTitle.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            timeTitle.style.display = "block";
        }, 400);
        //ensure Lenis resizes properly
        setTimeout(() => {
            lenis.resize();
        }, 800);
    }
});

//meBox
let mePicList = [0, 1, 2, 3];
mePic.forEach((el, i) => {
    gsap.set(el, {
        rotation: [0, -4, -8, -12][i],
        opacity: 1,
        zIndex: [3, 2, 1, 0][i],
        filter: `brightness(${[100, 80, 60, 40][i]}%)`
    });
});
let isAnimating = false;
const animateToLeft = () => {
    if (isAnimating) return;
    isAnimating = true;
    setTimeout(() => isAnimating = false, 1000);

    mePicList.unshift(mePicList.pop());
    const timeline = gsap.timeline();
    timeline.to(mePic[mePicList[0]], {
        duration: 0.4,
        rotation: -16,
        opacity: 0,
        ease: "power2.ease"
    }, 0);
    timeline.to(mePic[mePicList[3]], {
        duration: 0.4,
        rotation: -12,
        filter: "brightness(40%)",
        zIndex: 0,
        ease: "power2.ease"
    }, 0.2);
    timeline.to(mePic[mePicList[2]], {
        duration: 0.4,
        rotation: -8,
        filter: "brightness(60%)",
        zIndex: 1,
        ease: "power2.ease"
    }, 0.4);
    timeline.to(mePic[mePicList[1]], {
        duration: 0.4,
        rotation: -4,
        filter: "brightness(80%)",
        zIndex: 2,
        ease: "power2.ease"
    }, 0.6);
    timeline.set(mePic[mePicList[0]], {
        rotation: 4,
        filter: "brightness(100%)",
        zIndex: 3
    }, 0.8);
    timeline.to(mePic[mePicList[0]], {
        duration: 0.4,
        rotation: 0,
        opacity: 1,
        ease: "power2.ease"
    }, 0.8);
};
toLeft.addEventListener("click", animateToLeft);
const animateToRight = () => {
    if (isAnimating) return;
    isAnimating = true;
    setTimeout(() => isAnimating = false, 600);

    mePicList.push(mePicList.shift());
    const timeline = gsap.timeline();
    timeline.to(mePic[mePicList[3]], {
        duration: 0.4,
        rotation: 4,
        opacity: 0,
        ease: "power2.ease"
    }, 0);
    timeline.to(mePic[mePicList[0]], {
        duration: 0.4,
        rotation: 0,
        filter: "brightness(100%)",
        zIndex: 3,
        ease: "power2.ease"
    }, 0.2);
    timeline.to(mePic[mePicList[1]], {
        duration: 0.4,
        rotation: -4,
        filter: "brightness(80%)",
        zIndex: 2,
        ease: "power2.ease"
    }, 0.4);
    timeline.to(mePic[mePicList[2]], {
        duration: 0.4,
        rotation: -8,
        filter: "brightness(60%)",
        zIndex: 1,
        ease: "power2.ease"
    }, 0.6);
    timeline.set(mePic[mePicList[3]], {
        rotation: -16,
        filter: "brightness(40%)",
        zIndex: 0
    }, 0.8);
    timeline.to(mePic[mePicList[3]], {
        duration: 0.4,
        rotation: -12,
        opacity: 1,
        ease: "power2.ease"
    }, 0.8);
};
toRight.addEventListener("click", animateToRight);
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "me") {
        window.lenis.scrollTo(0);
        shade2.style.animation = "appear 0.2s ease forwards";
        container.style.animation = "disappear 0.2s ease forwards";
        setTimeout(() => {
            shade2.style.display = "block";
            container.style.display = "none";
        }, 200);
        meBox.style.display = "block";
        toLeft.style.animation = "fromR 0.4s ease forwards";
        setTimeout(() => {
            toLeft.style.display = "block";
        }, 400);
        toRight.style.animation = "fromL 0.4s ease forwards";
        setTimeout(() => {
            toRight.style.display = "block";
        }, 400);
        label1.style.animation = "fromR 0.4s ease forwards";
        label2.style.animation = "fromL 0.4s ease forwards";
        label3.style.animation = "fromR 0.4s ease forwards";
        label4.style.animation = "fromL 0.4s ease forwards";
        setTimeout(() => {
            label1.style.display = "block";
            label2.style.display = "block";
            label3.style.display = "block";
            label4.style.display = "block";
        }, 400);
        contactTitle.style.animation = "fromT 0.4s ease forwards";
        contactBox.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            contactTitle.style.display = "block";
            contactBox.style.display = "block";
        }, 400);
        musicTitle.style.animation = "fromT 0.4s ease forwards";
        musicShare.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            musicTitle.style.display = "block";
            musicShare.style.display = "block";
        }, 400);
        FavThingsTitle.style.animation = "fromT 0.4s ease forwards";
        FavThingsBox.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            FavThingsTitle.style.display = "block";
            FavThingsBox.style.display = "block";
        }, 400);
        //ensure Lenis resizes properly
        setTimeout(() => {
            lenis.resize();
        }, 800);
    }
});

//furryBox
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "furry") {
        window.lenis.scrollTo(0);
        shade2.style.animation = "appear 0.2s ease forwards";
        container.style.animation = "disappear 0.2s ease forwards";
        setTimeout(() => {
            shade2.style.display = "block";
            container.style.display = "none";
        }, 200);
        furryBox.style.display = "block";
        FT1.style.animation = "fromT 0.4s ease forwards";
        FT2.style.animation = "fromT 0.4s ease forwards";
        FT3.style.animation = "fromT 0.4s ease forwards";
        FT4.style.animation = "fromT 0.4s ease forwards";
        FT4_1.style.animation = "fromT 0.4s ease forwards";
        FT4_2.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            FT1.style.display = "block";
            FT2.style.display = "block";
            FT3.style.display = "block";
            FT4.style.display = "block";
            FT4_1.style.display = "block";
            FT4_2.style.display = "block";
        }, 400);
        if (document.body.clientWidth >= 1300) {
            furryAll1.style.animation = "fromT 0.4s ease forwards";
            setTimeout(() => {
                furryAll1.style.display = "block";
            }, 400);
        } else {
            furryAll2.style.animation = "fromT 0.4s ease forwards";
            setTimeout(() => {
                furryAll2.style.display = "block";
            }, 400);
        };
        showF = 1;
        furryPicBox1.style.animation = "fromT 0.4s ease forwards";
        furryPicBox2.style.animation = "fromR 0.4s ease forwards";
        setTimeout(() => {
            furryPicBox1.style.display = "flex";
            furryPicBox2.style.display = "flex";
        }, 400);
        //ensure Lenis resizes properly
        setTimeout(() => {
            lenis.resize();
        }, 800);
    }
});
window.addEventListener("resize", () => {
    if (showF == 1) {
        if (document.body.clientWidth >= 1300) {
            furryAll1.style.display = "block";
            furryAll2.style.display = "none";
        } else {
            furryAll1.style.display = "none";
            furryAll2.style.display = "block";
        };
    };
});

//repoBox
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "repo") {
        window.lenis.scrollTo(0);
        shade2.style.animation = "appear 0.2s ease forwards";
        container.style.animation = "disappear 0.2s ease forwards";
        setTimeout(() => {
            shade2.style.display = "block";
            container.style.display = "none";
        }, 200);
        repoBox.style.display = "block";
        RT1.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            RT1.style.display = "block";
        }, 400);
        repoLogoBox.style.display = "flex";
        RT2.style.animation = "fromT 0.4s ease forwards";
        repoPic1.style.animation = "fromT 0.4s ease forwards";
        repoPic2.style.animation = "fromR 0.4s ease forwards";
        repoPic3.style.animation = "fromR 0.4s ease forwards";
        repoPic4.style.animation = "fromT 0.4s ease forwards";
        repoPic5.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            RT2.style.display = "block";
            repoPic1.style.display = "block";
            repoPic2.style.display = "block";
            repoPic3.style.display = "block";
            repoPic4.style.display = "block";
            repoPic5.style.display = "block";
        }, 400);
        RC1.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            RC1.style.display = "block";
        }, 400);
        repoSkillBox.style.display = "flex";
        RT3.style.animation = "fromT 0.4s ease forwards";
        repoPic6.style.animation = "fromT 0.4s ease forwards";
        repoPic7.style.animation = "fromR 0.4s ease forwards";
        repoPic8.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            RT3.style.display = "block";
            repoPic6.style.display = "block";
            repoPic7.style.display = "block";
            repoPic8.style.display = "block";
        }, 400);
        RC2.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            RC2.style.display = "block";
        }, 400);
        //ensure Lenis resizes properly
        setTimeout(() => {
            lenis.resize();
        }, 800);
    }
});

//main
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(element => observer.observe(element));
});

const projects = document.getElementById("projects");
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "scroll") {
        window.lenis.scrollTo(projects);
    }
});

var isDragging = false;
var startPosition;
var startScrollPosition;
document.querySelectorAll(".PimgBox, .defaultPicBox").forEach(item => {
    item.addEventListener("mousedown", function(event) {
        isDragging = true;
        startPosition = event.clientX;
        startScrollPosition = item.scrollLeft;
    });
    item.addEventListener("mousemove", function(event) {
        if (isDragging) {
            var scrollDistance = event.clientX - startPosition;
            item.scrollLeft = startScrollPosition - scrollDistance;
        }
    });
    item.addEventListener("mouseup", function() {
        isDragging = false;
    });
    item.addEventListener("mouseout", function() {
        isDragging = false;
    });
});

const directMessageForm = document.getElementById("directMessageForm");
const directMessageLoading = document.getElementById("directMessageLoading");
const directMessageLoadingText = document.getElementById("directMessageLoadingText");
const directMessageSuccessText = document.getElementById("directMessageSuccessText");
emailjs.init("sNZVE-CKE8ygwtR9z");
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("directMessageForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        directMessageForm.style.animation = "disappear 0.2s ease forwards";
        setTimeout(() => {
            directMessageForm.style.display = "none";
            directMessageLoading.style.animation = "appear 0.2s ease forwards";
            directMessageLoadingText.style.animation = "appear 0.2s ease forwards";
            setTimeout(() => {
                directMessageLoading.style.display = "block";
                directMessageLoadingText.style.display = "block";
                directMessageLoading.style.animation = "rotate 1s linear infinite";
            }, 200);
        }, 200);
        const selectedPurposes = [...form.querySelectorAll('input[name="purpose"]:checked')]
            .map(el => el.value)
            .join(", ");
        let hiddenInput = form.querySelector('input[name="purpose_combined"]');
        if (!hiddenInput) {
            hiddenInput = document.createElement("input");
            hiddenInput.type = "hidden";
            hiddenInput.name = "purpose_combined";
            form.appendChild(hiddenInput);
        }
        hiddenInput.value = selectedPurposes;
        emailjs.sendForm("service_web_4793", "template_mozhnru", form)
            .then(() => {
                directMessageLoading.style.animation = "disappear 0.2s ease forwards";
                directMessageLoadingText.style.animation = "disappear 0.2s ease forwards";
                setTimeout(() => {
                    directMessageLoading.style.display = "none";
                    directMessageLoadingText.style.display = "none";
                    directMessageSuccessText.style.animation = "appear 0.2s ease forwards";
                    setTimeout(() => {
                        directMessageSuccessText.style.display = "block";
                    }, 200);
                }, 200);
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("⚠️ Failed to send. Please try again later.");
                directMessageLoading.style.animation = "disappear 0.2s ease forwards";
                directMessageLoadingText.style.animation = "disappear 0.2s ease forwards";
                setTimeout(() => {
                    directMessageLoading.style.display = "none";
                    directMessageLoadingText.style.display = "none";
                    directMessageForm.style.animation = "appear 0.2s ease forwards";
                    setTimeout(() => {
                        directMessageForm.style.display = "block";
                    }, 200);
                }, 200);
            });
    });
});

const circles = document.querySelectorAll(".worldMapCircle");
function createRipple(target) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    target.appendChild(ripple);
    gsap.fromTo(
        ripple,
        { scale: 0, backgroundColor: "rgba(250, 100, 0, 0.2)" },
        {
            scale: 1,
            duration: 2,
            backgroundColor: "rgba(250, 100, 0, 0)",
            ease: "power2.out",
            onComplete: () => ripple.remove()
        }
    );
}
const rippleTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 2
});
rippleTimeline.call(() => {
    circles.forEach(circle => createRipple(circle));
});
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        rippleTimeline.pause();
    } else {
        rippleTimeline.resume();
    }
});

const scroll2 = document.getElementById("scroll2");
scroll2.addEventListener("click", () => {
    window.lenis.scrollTo(0);
});

//Let's go!
const loadText1 = document.getElementById("loadText1");
const loadText2 = document.getElementById("loadText2");
const imgs = document.querySelectorAll("img");
const total = imgs.length;
let loaded = 0;
const preloadImage = async (img) => {
    if (!img.complete) {
        await new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
        });
    }
    try {
        await img.decode();//force decode
    } catch (e) {}
    loaded++;
    const percent = Math.round((loaded / total) * 100);
    loadText1.textContent = percent + "% loaded";
};
const preloadAll = async () => {
    await Promise.all([...imgs].map(preloadImage));
    loadText1.textContent = "All done!";
    loadText2.textContent = "Redefine the world with imagination!";
    startPage();
};
preloadAll();