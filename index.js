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

quit.addEventListener("click", () => {
    shade2.style.animation = "disappear 0.2s ease-in forwards";
    container.style.animation = "appear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "none";
        container.style.display = "block";
    }, 200);
});

let l = document.getElementById("location");
let me = document.getElementById("me");
let repo = document.getElementById("repo");

l.addEventListener("click", () => {
    shade2.style.animation = "appear 0.2s ease-in forwards";
    container.style.animation = "disappear 0.2s ease-in forwards";
    setTimeout(() => {
        shade2.style.display = "block";
        container.style.display = "none";
    }, 200);
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