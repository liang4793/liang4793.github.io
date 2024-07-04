//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;
document.body.style.cursor = 'wait';
let showF = 0;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//page
let container = document.getElementById("container");

//JSneeded & Loading
let loadText = document.getElementById("loadText");
let JSnotice = document.getElementById("JSneeded");
let shade1 = document.getElementById("shade1");
let shade1Text = document.getElementById("shade1Text");
shade1Text.innerHTML = "[... JS enabled. Loading website ...]";
function startPage() {
    setTimeout(() => {
        loadText.style.animation = "disappear 0.4s ease-out forwards";
        JSnotice.style.animation = "disappear 0.4s ease-out forwards";
        shade1.style.animation = "disappear 0.4s ease-out forwards";
        setTimeout(() => {
            loading = 0;
            document.body.style.cursor = 'crosshair';
            loadText.style.display = "none";
            JSnotice.style.display = "none";
            shade1.style.display = "none";
            container.style.display = "block";
        }, 400);
    }, 1000);
};

//main
let shade2 = document.getElementById("shade2");
let quit = document.getElementById("quit");
let l = document.getElementById("location");
let me = document.getElementById("me");
let furry = document.getElementById("furry");
let repo = document.getElementById("repo");

//locationBox
let lBox = document.getElementById("locationBox");
let map = document.getElementById("map");
let LL = document.getElementById("LL");
let SS = document.getElementById("SS");
let timeTitle = document.getElementById("timeTitle");
let localTime = document.getElementById("localTime");

//meBox
let meBox = document.getElementById("meBox");
let mePic = document.getElementsByClassName("mePicBox2");
let toLeft = document.getElementById("toLeft");
let toRight = document.getElementById("toRight");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let contactTitle = document.getElementById("contactTitle");
let contactBox = document.getElementById("contactBox");

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

quit.addEventListener("click", () => {
    shade2.style.animation = "disappear 0.2s ease-in forwards";
    container.style.animation = "appear 0.2s ease-in forwards";
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
        contactTitle.style.display = "none";
        contactBox.style.display = "none";

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
    }, 200);
});

//locationBox
function updateLocalTime() {
    var time = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    localTime.innerHTML = time;
};
l.addEventListener("click", () => {
    updateLocalTime();
    setInterval(updateLocalTime, 1000);
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "block";
        container.style.display = "none";
    }, 200);
    lBox.style.display = "block";
    map.style.animation = "fromL2 0.4s ease forwards";
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
});

//meBox
var mePicList = [1, 2, 3, 4];
toLeft.addEventListener("click", () => {
    mePicList.unshift(mePicList.pop());
    mePic[mePicList[0]-1].style.animation = "to4 reverse 1.2s ease forwards";
    setTimeout(() => {
        mePic[mePicList[3]-1].style.animation = "to3 reverse 0.4s ease forwards";
        setTimeout(() => {
            mePic[mePicList[2]-1].style.animation = "to2 reverse 0.4s ease forwards";
            setTimeout(() => {
                mePic[mePicList[1]-1].style.animation = "to1 reverse 0.4s ease forwards";
            },200);
        },200);
    },200);
});
toRight.addEventListener("click", () => {
    mePicList.push(mePicList.shift());
    mePic[mePicList[3]-1].style.animation = "to4 1.2s ease forwards";
    setTimeout(() => {
        mePic[mePicList[0]-1].style.animation = "to1 0.4s ease forwards";
        setTimeout(() => {
            mePic[mePicList[1]-1].style.animation = "to2 0.4s ease forwards";
            setTimeout(() => {
                mePic[mePicList[2]-1].style.animation = "to3 0.4s ease forwards";
            },200);
        },200);
    },200);
});
me.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
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
    label1.style.animation = "appear 0.4s ease forwards";
    label2.style.animation = "appear 0.4s ease forwards";
    setTimeout(() => {
        label1.style.display = "block";
        label2.style.display = "block";
    }, 400);
    contactTitle.style.animation = "fromT 0.4s ease forwards";
    contactBox.style.animation = "fromT 0.4s ease forwards";
    setTimeout(() => {
        contactTitle.style.display = "block";
        contactBox.style.display = "block";
    }, 400);
});

//furryBox
furry.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
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
    if (document.body.clientWidth >= 894) {
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
    furryPicBox.style.animation = "appear 0.4s ease forwards";
    setTimeout(() => {
        furryPicBox.style.display = "block";
    }, 400);
});
window.addEventListener("resize", () => {
    if (showF == 1) {
        if (document.body.clientWidth >= 894) {
            furryAll1.style.display = "block";
            furryAll2.style.display = "none";
        } else {
            furryAll1.style.display = "none";
            furryAll2.style.display = "block";
        };
    };
});

//repoBox
repo.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "block";
        container.style.display = "none";
    }, 200);
});

//main
let s = document.getElementById("scroll");
let projects = document.getElementById("projects");

s.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth" });
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

//Let's go!
let loadNum = "0%";
let img = document.querySelectorAll("img");
let len = img.length;
let sum = 0;
img.forEach((singleImg) => {
    singleImg.onload = () => {
        sum ++;
        loadNum = Math.round(sum / len * 100) + "%";
        loadText.innerHTML = loadNum + " loaded";
    };
});
window.onload = function () {
    loadText.innerHTML = "All done!";
    startPage();
};