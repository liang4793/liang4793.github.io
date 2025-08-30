//¯\_(ツ)_/¯ Why are you looking at my code? 
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");

function updateProgressBar() {
    const windowWidth = document.body.clientWidth;
    const elementWidth = progressBar.offsetWidth;
    const p = Math.round((elementWidth / windowWidth) * 100);
    percentage.innerHTML = p + "%";
    if (p == 0) {
        percentage.style.opacity = "0";
        percentage.style.marginTop = "0px";
    } else if (progressBar.offsetWidth >= window.innerWidth - 66) {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "1.25rem";
    } else {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "0px";
    }
}
window.onload = function() {
    updateProgressBar();
}
window.onresize = function() {
    updateProgressBar();
}
window.addEventListener("scroll", function() {
    updateProgressBar();
});

const wordCount = document.getElementById("wordCount");
const readingTime = document.getElementById("readingTime");
const article = document.getElementById("text");

function countWords(str) {
    const arr = str.split(" ");
    return arr.filter(word => word !== "").length;
};

let letterC = countWords(article.innerText);
wordCount.innerHTML = letterC;
let readT = Math.round(letterC / 100);
console.log(readT);
if (readT >= 1) {
    readingTime.innerHTML = "≈" + readT;
} else {
    readingTime.innerHTML = "<1";
}

const content = document.getElementById("expendText");
const articleHeadings = article.querySelectorAll("h1, h2, h3, h4, h5, h6");
function scrollToElement(id) {
    const target = document.getElementById(id);
    if (target) {
        window.lenis.scrollTo(target, { offset: -15 });
    }
};
articleHeadings.forEach(function(heading, index) {
    let headingLevel = heading.tagName.toLowerCase().replace("h", "");
    let headingName = heading.innerText.trim();
    let idName = heading.id;
    if (!idName) {
        idName = "No" + (index + 1);
        heading.id = idName;
    };
    let contentItem = document.createElement("div");
    contentItem.setAttribute("class", "hoverable");
    contentItem.setAttribute("id", idName);
    contentItem.setAttribute("style", `position: relative; padding-bottom: 1rem; padding-left: ${headingLevel - 1}rem;`);
    contentItem.setAttribute("onclick", `scrollToElement('${idName}')`);
    contentItem.innerHTML = `L${headingLevel} ${headingName}`;
    content.appendChild(contentItem);
});