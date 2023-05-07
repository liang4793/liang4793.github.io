//¯\_(ツ)_/¯ Why are you looking at my code? 

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//cursor
let cursor = document.getElementById("cursor");
cursor.style.animation = "cursorLoading 1.4s infinite";
let mx = 0, my = 0, cx = 0, cy = 0, i = 0;
window.addEventListener('mousemove', (m) => {
    mx = m.x - cursor.offsetLeft - cursor.clientWidth / 2;
    my = m.y - cursor.offsetTop - cursor.clientHeight / 2;
    i = 0;
    if (cursor.style.display != "block") {
        cursor.style.display = "block";
    };
});
function moveCursor() {
    if (i < 20) {
        cx += mx / 20;
        cy += my / 20;
    }
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
            JSnotice.style.display = "none";
            shade.style.display = "none";
            container.style.display = "block";
            cursor.style.animation = "none";
        }, 400);
    }, 1000);
};

//Let's go!
window.onload = function () {
    startPage();
};