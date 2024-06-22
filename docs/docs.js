//¯\_(ツ)_/¯ Why are you looking at my code? 
let progressBar = document.getElementById('progressBar');
let percentage = document.getElementById('percentage');

function getElementWidthPercentage(element) {
    const windowWidth = document.body.clientWidth;
    const elementWidth = element.offsetWidth;
    const percentage = (elementWidth / windowWidth) * 100;
    return Math.round(percentage);
}
window.onload = function() {
    p = getElementWidthPercentage(progressBar);
    percentage.innerHTML = p + "%";
    if (p == 0) {
        percentage.style.opacity = "0";
        percentage.style.marginTop = "0px";
    } else if (p >= 98) {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "20px";
    } else {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "0px";
    }
}
window.addEventListener('scroll', function() {
    p = getElementWidthPercentage(progressBar);
    percentage.innerHTML = p + "%";
    if (p == 0) {
        percentage.style.opacity = "0";
        percentage.style.marginTop = "0px";
    } else if (p >= 98) {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "20px";
    } else {
        percentage.style.opacity = "1";
        percentage.style.marginTop = "0px";
    }
});