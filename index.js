//¯\_(ツ)_/¯ Why are you looking at my code? 
let body = document.body;
let loading = 1;

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");

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

//main

//Let's go!
window.onload = function () {
    startPage();
};