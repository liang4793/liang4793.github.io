//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;
let inTransit = true;
document.body.style.cursor = 'wait';
let showF = 0;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//page
let container = document.getElementById("container");

//JSneeded & Loading
let loadText = document.getElementById("loadText");
let JSnotice = document.getElementById("JSneeded");
let mainLogo = document.getElementById("mainLogo");
let shade1 = document.getElementById("shade1");
let shade1Text = document.getElementById("shade1Text");
shade1Text.innerHTML = "[... JS enabled. Loading website ...]";
function startPage() {
    //Split the text and prepare the opening animation
    const mainText = document.getElementById('main');
    const targetIds = ['location', 'me', 'furry', 'repo', 'scroll'];
    const nodes = Array.from(mainText.childNodes);
    let lineBuffer = [];
    const lineBlocks = [];
    for (const node of nodes) {
        if (node.nodeName === 'BR') {
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
        const result = document.createElement('div');
        let charIndex = 1;
        for (const node of line) {
            if (node.nodeType === Node.TEXT_NODE) {
                for (const ch of node.textContent) {
                    if (ch.trim() === '') {
                        result.appendChild(document.createTextNode(ch));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = ch;
                        span.id = String.fromCharCode(97 + lineIndex) + charIndex++;
                        span.style.opacity = '0';
                        span.style.filter = 'blur(0.2rem)';
                        result.appendChild(span);
                    }
                }
            } else if (
                node.nodeType === Node.ELEMENT_NODE &&
                node.tagName === 'SPAN' &&
                targetIds.includes(node.id)
            ) {
                result.appendChild(node.cloneNode(true));
            } else {
                result.appendChild(node.cloneNode(true));
            }
        }
        return result.innerHTML;
    });
    mainText.innerHTML = newContent.join('<br>');

    setTimeout(() => {
        loadText.style.animation = "disappear 0.4s ease forwards";
        JSnotice.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            loadText.style.display = "none";
            JSnotice.style.display = "none";
            mainLogo.style.display = "block";
            setTimeout(() => {
                mainLogo.style.animation = "disappear 0.4s ease forwards";
                shade1.style.animation = "disappear 0.4s ease forwards";
                setTimeout(() => {
                    loading = 0;
                    inTransit = false;
                    document.body.style.cursor = 'crosshair';
                    shade1.style.display = "none";
                    container.style.display = "block";
                    //Opening animation
                    const mainTextTimeline = gsap.timeline();
                    const animationTargetIds = ['location', 'me', 'furry', 'scroll'];
                    mainTextTimeline.add(() => {
                        animationTargetIds.forEach((id, index) => {
                            const el = document.getElementById(id);
                            if (el) {
                                mainTextTimeline.to(el, {
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0rem)',
                                    duration: 0.4,
                                    ease: "power1.ease"
                                }, 0.2 + index * 0.4);
                            }
                        });
                    }, '+=0.2');
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll('span')).filter(span => /^a\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: 'blur(0rem)',
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "power1.ease"
                            });
                        });
                    }, '+=1.4');
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll('span')).filter(span => /^b\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: 'blur(0rem)',
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "power1.ease"
                            });
                        });
                    }, '<');
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll('span')).filter(span => /^c\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: 'blur(0rem)',
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "power1.ease"
                            });
                        });
                    }, '<');
                    mainTextTimeline.add(() => {
                        const spans = Array.from(mainText.querySelectorAll('span')).filter(span => /^d\d+$/.test(span.id));
                        spans.forEach((span, i) => {
                            gsap.to(span, {
                                opacity: 1,
                                filter: 'blur(0rem)',
                                duration: 0.2,
                                delay: i * 0.02,
                                ease: "power1.ease"
                            });
                        });
                    }, '<');
                }, 400);
            }, 1000);
        }, 400);
    }, 1000);
};

//transitionCanvas
const canvas = document.getElementById("transitionCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const stars = [];
const starCount = 300; //Controls the number of meteors
const colorStart = "rgba(250,100,0,1)"; //Meteor head color
const colorEnd = "rgba(250,100,0,0)"; //Meteor tail gradient (transparent at the end)
const speedMultiplier = 10; //Controls the speed of meteors
const glowColor = "rgb(200, 80, 0)"; //Glow color for the meteors
//Generates a random number within a range
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
//Star class to create and manage meteors
class Star {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.originalZ = z;
    }
    //Update the meteor's position and speed
    update() {
        this.z -= 0.3 * speedMultiplier; // Speed up the meteor
        if (this.z <= 0) {
            this.z = this.originalZ; // Respawn the meteor
            this.x = randomRange(-canvas.width, canvas.width);
            this.y = randomRange(-canvas.height, canvas.height);
        }
    }
    //Draw the meteor and its tail with a glowing effect
    draw() {
        const sx = (this.x / this.z) * canvas.width / 2 + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height / 2 + canvas.height / 2;
        const trailX = (this.x / (this.z + 100)) * canvas.width / 2 + canvas.width / 2; // Tail start point
        const trailY = (this.y / (this.z + 100)) * canvas.height / 2 + canvas.height / 2;
        //Create gradient for the meteor's tail
        const gradient = ctx.createLinearGradient(sx, sy, trailX, trailY);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        //Add glow effect
        ctx.shadowBlur = 20; // Blur radius for glow effect
        ctx.shadowColor = glowColor; // Glow color
        //Draw the meteor's trail
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(trailX, trailY);
        ctx.lineWidth = Math.max(0.1, 10 * (1 - this.z / this.originalZ)); // Adjust the thickness of the line
        ctx.strokeStyle = gradient;
        ctx.stroke();
        //Reset shadow to avoid affecting other drawing operations
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";
    }
}
//Initialize all meteors
function initStars() {
    for (let i = 0; i < starCount; i++) {
        const x = randomRange(-canvas.width, canvas.width);
        const y = randomRange(-canvas.height, canvas.height);
        const z = randomRange(0.1, canvas.width); // Control initial distance of meteors
        stars.push(new Star(x, y, z));
    }
}
//Main animation loop
function animate() {
    if (!inTransit) return; //Stop the animation if inTransit is false
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}
initStars(); //Initialize meteors
animate(); //Start animation
//Adjust canvas size dynamically on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0; // Clear the existing array of stars
    initStars(); //Reinitialize stars
});

//main
let shade2 = document.getElementById("shade2");
let quit = document.getElementById("quit");

//locationBox
let lBox = document.getElementById("locationBox");
let map = document.getElementById("map");
let LL = document.getElementById("LL");
let SS = document.getElementById("SS");
let timeTitle = document.getElementById("timeTitle");
let localTime = document.getElementById("localTime");

//meBox
let meBox = document.getElementById("meBox");
let mePic = document.querySelectorAll('.mePicBox2');
let toLeft = document.getElementById("toLeft");
let toRight = document.getElementById("toRight");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");
let contactTitle = document.getElementById("contactTitle");
let contactBox = document.getElementById("contactBox");
let musicTitle = document.getElementById("musicTitle");
let musicShare = document.getElementById("musicShare");
let NGLTitle = document.getElementById("NGLTitle");
let NGLBox = document.getElementById("NGLBox");

//furryBox
let furryBox = document.getElementById("furryBox");
let FT1 = document.getElementById("FT1");
let FT2 = document.getElementById("FT2");
let FT3 = document.getElementById("FT3");
let FT4 = document.getElementById("FT4");
let furryAll1 = document.getElementById("furryAll1");
let furryAll2 = document.getElementById("furryAll2");
let furryPicBox = document.getElementById("furryPicBox");

//repoBox
let repoBox = document.getElementById("repoBox");
let RT1 = document.getElementById("RT1");
let repoLogoBox = document.getElementById("repoLogoBox");
let RT2 = document.getElementById("RT2");
let repoPic1 = document.getElementById("repoPic1");
let repoPic2 = document.getElementById("repoPic2");
let repoPic3 = document.getElementById("repoPic3");
let repoPic4 = document.getElementById("repoPic4");
let repoPic5 = document.getElementById("repoPic5");
let RC1 = document.getElementById("RC1");
let repoSkillBox = document.getElementById("repoSkillBox");
let RT3 = document.getElementById("RT3");
let repoPic6 = document.getElementById("repoPic6");
let repoPic7 = document.getElementById("repoPic7");
let repoPic8 = document.getElementById("repoPic8");
let RC2 = document.getElementById("RC2");

quit.addEventListener("click", () => {
    shade2.style.animation = "disappear 0.2s ease forwards";
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
        NGLTitle.style.display = "none";
        NGLBox.style.display = "none";

        furryBox.style.display = "none";
        FT1.style.display = "none";
        FT2.style.display = "none";
        FT3.style.display = "none";
        FT4.style.display = "none";
        furryAll1.style.display = "none";
        furryAll2.style.display = "none";
        showF = 0;
        furryPicBox.style.display = "none";

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
        window.scrollTo(0, 0);
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
        filter: 'brightness(40%)',
        zIndex: 0,
        ease: "power2.ease"
    }, 0.2);
    timeline.to(mePic[mePicList[2]], {
        duration: 0.4,
        rotation: -8,
        filter: 'brightness(60%)',
        zIndex: 1,
        ease: "power2.ease"
    }, 0.4);
    timeline.to(mePic[mePicList[1]], {
        duration: 0.4,
        rotation: -4,
        filter: 'brightness(80%)',
        zIndex: 2,
        ease: "power2.ease"
    }, 0.6);
    timeline.set(mePic[mePicList[0]], {
        rotation: 4,
        filter: 'brightness(100%)',
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
    setTimeout(() => isAnimating = false, 1000);

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
        filter: 'brightness(100%)',
        zIndex: 3,
        ease: "power2.ease"
    }, 0.2);
    timeline.to(mePic[mePicList[1]], {
        duration: 0.4,
        rotation: -4,
        filter: 'brightness(80%)',
        zIndex: 2,
        ease: "power2.ease"
    }, 0.4);
    timeline.to(mePic[mePicList[2]], {
        duration: 0.4,
        rotation: -8,
        filter: 'brightness(60%)',
        zIndex: 1,
        ease: "power2.ease"
    }, 0.6);
    timeline.set(mePic[mePicList[3]], {
        rotation: -16,
        filter: 'brightness(40%)',
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
        window.scrollTo(0, 0);
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
        NGLTitle.style.animation = "fromT 0.4s ease forwards";
        NGLBox.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            NGLTitle.style.display = "block";
            NGLBox.style.display = "flex";
        }, 400);
    }
});

//furryBox
document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "furry") {
        window.scrollTo(0, 0);
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
        setTimeout(() => {
            FT1.style.display = "block";
            FT2.style.display = "block";
            FT3.style.display = "block";
            FT4.style.display = "block";
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
        furryPicBox.style.animation = "fromT 0.4s ease forwards";
        setTimeout(() => {
            furryPicBox.style.display = "flex";
        }, 400);
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
        window.scrollTo(0, 0);
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
    }
});

//main
let projects = document.getElementById("projects");

document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.id === "scroll") {
        projects.scrollIntoView({ behavior: "smooth" });
    }
});

var isDragging = false;
var startPosition;
var startScrollPosition;

document.querySelectorAll(".PimgBox").forEach(item => {
    item.addEventListener('mousedown', function(event) {
        isDragging = true;
        startPosition = event.clientX;
        startScrollPosition = item.scrollLeft;
    });
    item.addEventListener('mousemove', function(event) {
        if (isDragging) {
            var scrollDistance = event.clientX - startPosition;
            item.scrollLeft = startScrollPosition - scrollDistance;
        }
    });
    item.addEventListener('mouseup', function() {
        isDragging = false;
    });
    item.addEventListener('mouseout', function() {
        isDragging = false;
    });
});

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

//Let's go!
let loadText1 = document.getElementById("loadText1");
let loadText2 = document.getElementById("loadText2");
let loadNum = "0%";
let img = document.querySelectorAll("img");
let len = img.length;
let sum = 0;
img.forEach((singleImg) => {
    singleImg.onload = () => {
        sum ++;
        loadNum = Math.round(sum / len * 100) + "%";
        loadText1.innerHTML = loadNum + " loaded";
    };
});
window.onload = function () {
    loadText1.innerHTML = "All done!";
    loadText2.innerHTML = "Redefine the world with imagination!";
    startPage();
};