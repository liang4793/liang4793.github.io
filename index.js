//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

//page
let container = document.getElementById("container");

//JSneeded & Loading
let JSnotice = document.getElementById("JSneeded");
let shade1 = document.getElementById("shade1");
let shade1Text = document.getElementById("shade1Text");
shade1Text.innerHTML = "[... JS enabled. Loading website ...]";
function startPage() {
    setTimeout(() => {
        JSnotice.style.animation = "disappear 0.4s ease-out forwards";
        shade1.style.animation = "disappear 0.4s ease-out forwards";
        setTimeout(() => {
            loading = 0;
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
let repo = document.getElementById("repo");

//locationBox
let lBox = document.getElementById("locationBox");
let map = document.getElementById("map");
let LL = document.getElementById("LL");
let SS = document.getElementById("SS");
let timeTitle = document.getElementById("timeTitle");
let localTime = document.getElementById("localTime");

let meBox = document.getElementById("meBox");
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
        repoBox.style.display = "none";
    }, 200);
});

function updateLocalTime() {
    var time = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    localTime.innerHTML = time;
}
l.addEventListener("click", () => {
    updateLocalTime()
    setInterval(updateLocalTime, 1000);
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
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
});

me.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "block";
        container.style.display = "none";
    }, 200);
});

repo.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "block";
        container.style.display = "none";
    }, 200);
});

let s = document.getElementById("scroll");
let projects = document.getElementById("projects");

s.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth" });
});

//Let's go!
window.onload = function () {
    startPage();
};