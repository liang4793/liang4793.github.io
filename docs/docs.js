//¯\_(ツ)_/¯ Why are you looking at my code? 
let progressBar = document.getElementById('progressBar');
let percentage = document.getElementById('percentage');

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
window.addEventListener('scroll', function() {
    updateProgressBar();
});