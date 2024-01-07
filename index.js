//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//cursor
let cursor = document.getElementById("cursor");
let cursorTL = document.getElementById("cursorTL");
let cursorTR = document.getElementById("cursorTR");
let cursorBL = document.getElementById("cursorBL");
let cursorBR = document.getElementById("cursorBR");
let mx = 0, my = 0, cx = 0, cy = 0, i = 0;
body.addEventListener("mousemove", (m) => {
    mx = m.x - cursor.offsetLeft - cursor.clientWidth / 2;
    my = m.y - cursor.offsetTop - cursor.clientHeight / 2;
    i = 0;
    if (cursor.style.display != "block") {
        cursor.style.display = "block";
        cursor.style.animation = "cursorAppear 0.2s ease-in backwards";
    };
    if (loading) {
        cursorTL.style.animation = "TLloading 2s infinite";
        cursorTR.style.animation = "TRloading 2s infinite";
        cursorBL.style.animation = "BLloading 2s infinite";
        cursorBR.style.animation = "BRloading 2s infinite";
    } else {
        cursorTL.style.animation = "none";
        cursorTR.style.animation = "none";
        cursorBL.style.animation = "none";
        cursorBR.style.animation = "none";
    };
});
body.addEventListener("mouseleave", () => {
    cursor.style.animation = "cursorDisappear 0.2s ease-out forwards";
    setTimeout(() => {
        cursor.style.display = "none";
    }, 200);
});
function moveCursor() {
    if (i < 18) {
        cx += mx / 18;
        cy += my / 18;
    };
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    i++;
};
setInterval(moveCursor, 1);

//page
let container = document.getElementById("container");

//JSneeded & Loading
let JSnotice = document.getElementById("JSneeded");
let shade = document.getElementById("shade");
let shadeText = document.getElementById("shadeText");
shadeText.innerHTML = "[... JS enabled. Loading website ...]";
function startPage() {
    setTimeout(() => {
        JSnotice.style.animation = "disappear 0.4s ease-out forwards";
        shade.style.animation = "disappear 0.4s ease-out forwards";
        setTimeout(() => {
            loading = 0;
            JSnotice.style.display = "none";
            shade.style.display = "none";
            container.style.display = "block";
        }, 400);
    }, 1000);
};


//homePage
//nothing yet


//introPage
let introStatus = "life";
let switchButton = document.getElementById("switchButton");
let introTitle = document.getElementById("introTitle");
let picText = document.getElementById("picText");
let arrow = document.getElementById("arrow");
let switchButtonText1 = document.getElementById("switchButtonText1");
let MYpic = document.getElementById("MYpic");
window.onresize = function () {
    introTitle.style.bottom = picText.offsetHeight + 40 + "px";
};
switchButton.addEventListener("click", () => {
    if (introStatus == "life") {
        introStatus = "work";
        console.log(introStatus);

        arrow.style.animation = "fromL 0.2s reverse ease forwards";
        setTimeout(() => {
            arrow.style.display = "none";
            arrow.style.animation = "none";
        }, 200)
        switchButtonText1.style.animation = " moveL 0.4s 0.2s ease forwards";
        setTimeout(() => {
            switchButtonText1.style.marginLeft = "-50px";
            switchButtonText1.style.animation = "none";
            arrow.style.left = "calc(100% - 170px)";
            arrow.style.display = "block";
            arrow.style.animation = "fromL 0.2s ease forwards";
            setTimeout(() => {
                arrow.style.animation = "none";
            }, 200);
        }, 600);

        MYpic.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            MYpic.style.animation = "none";
            MYpic.src = "image\\MYpic\\pic1z.jpg";
            MYpic.style.animation = "appear 0.4s ease forwards";
            setTimeout(() => {
                MYpic.style.animation = "none";
            }, 400);
        }, 400);

        picText.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            picText.style.animation = "none";
            picText.innerHTML = "Avatar for Github/X or other: ZimaBlue.";
            picText.style.animation = "appear 0.4s ease forwards";
            setTimeout(() => {
                picText.style.animation = "none";
            }, 400);
        }, 400);
    } else {
        introStatus = "life";
        console.log(introStatus);

        arrow.style.animation = "fromL 0.2s reverse ease forwards";
        setTimeout(() => {
            arrow.style.display = "none";
            arrow.style.animation = "none";
        }, 200)
        switchButtonText1.style.animation = " moveL 0.4s 0.2s reverse ease forwards";
        setTimeout(() => {
            switchButtonText1.style.marginLeft = "0";
            switchButtonText1.style.animation = "none";
            arrow.style.left = "0px";
            arrow.style.display = "block";
            arrow.style.animation = "fromL 0.2s ease forwards";
            setTimeout(() => {
                arrow.style.animation = "none";
            }, 200);
        }, 600);

        MYpic.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            MYpic.style.animation = "none";
            MYpic.src = "image\\MYpic\\pic2z.jpg";
            MYpic.style.animation = "appear 0.4s ease forwards";
            setTimeout(() => {
                MYpic.style.animation = "none";
            }, 400);
        }, 400);

        picText.style.animation = "disappear 0.4s ease forwards";
        setTimeout(() => {
            picText.style.animation = "none";
            picText.innerHTML = "Avatar for Wechat/CloudMusic or other: Shikabane.";
            picText.style.animation = "appear 0.4s ease forwards";
            setTimeout(() => {
                picText.style.animation = "none";
            }, 400);
        }, 400);
    }
});


//Let's go!
window.onload = function () {
    startPage();
    setTimeout(() => {
        introTitle.style.bottom = picText.offsetHeight + 40 + "px";
    }, 1600);
};