//¯\_(ツ)_/¯ Why are you looking at my code? 

//cursor
let cursor = document.getElementById("cursor");
cursor.style.animation = "cursorLoading 1.4s infinite"

//page
let container = document.getElementById("container");

//JSneeded & Loading
let JSnotice = document.getElementById("JSneeded");
let shade = document.getElementById("shade");
let shadeText = document.getElementById("shadeText");
shadeText.innerHTML = "[... JS enabled. Loading website ...]";
window.onload = function () {
    setTimeout(() => {
        JSnotice.style.animation = "disappear 0.4s ease-out forwards";
        shade.style.animation = "disappear 0.4s ease-out forwards";
        setTimeout(() => {
            JSnotice.style.display = "none";
            shade.style.display = "none";
            container.style.display = "block";
            isLoading = false;
            cursor.style.animation = "none"
        }, 400);
    }, 1000);
};

//welcome
console.log("[Welcome to Liáng4793's Repository(Liáng's Repo)]");