//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//cursor
//cursor move
let cursor = document.getElementById("cursor");
let mx = 0, my = 0, cx = 0, cy = 0, i = 0;
body.addEventListener("mousemove", (m) => {
    mx = m.x - cursor.offsetLeft - cursor.clientWidth / 2;
    my = m.y - cursor.offsetTop - cursor.clientHeight / 2;
    i = 0;
    if (cursor.style.display != "block") {
        cursor.style.display = "block";
        if (loading) {
            cursor.style.animation = "cursorLoading 1.4s infinite";
        } else {
            cursor.style.animation = "cursorAppear 0.2s ease-in backwards";
        };
    } else {
        if (loading) {
            cursor.style.animation = "cursorLoading 1.4s infinite";
        } else {
            cursor.style.animation = "none";
        };
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
//cursor hover
Array.from(document.getElementsByTagName("hoverable")).forEach(e => e.addEventListener("mouseover", () => {
    console.log("hovering");
    cursor.style.width = "80px";
}));
Array.from(document.getElementsByTagName("hoverable")).forEach(e => e.addEventListener("mouseout", () => {
    console.log("unhovering");
    cursor.style.width = "40px";
}));

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

//Let's go!
window.onload = function () {
    startPage();
};