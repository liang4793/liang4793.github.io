//¯\_(ツ)_/¯ Why are you looking at my code? 
const shadeZoom = document.getElementById("shadeZoom");
const zoomedImg = document.getElementById("zoomedImg");
document.querySelectorAll("img.zoomable").forEach(img => {
    let startX = 0;
    let startY = 0;
    let moved = false;
    img.addEventListener("mousedown", (e) => {
        startX = e.clientX;
        startY = e.clientY;
        moved = false;
    });
    img.addEventListener("mousemove", (e) => {
        if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10) {
            moved = true;
        }
    });
    img.addEventListener("mouseup", (e) => {
        if (!moved) {
            document.body.classList.add("noScroll");
            zoomedImg.src = img.src;
            zoomedImg.title = img.title || "";
            shadeZoom.style.display = "flex";
            shadeZoom.style.animation = "appear 0.2s ease forwards";
            zoomedImg.style.animation = "zoomedImgAppear 0.2s ease forwards";
            setTimeout(() => {
                zoomedImg.style.animation = "";
            }, 200);
        }
    });
});
shadeZoom.addEventListener("click", (e) => {
    if (e.target === shadeZoom) {
        document.body.classList.remove("noScroll");
        shadeZoom.style.animation = "disappear 0.4s ease forwards";
        zoomedImg.style.animation = "zoomedImgDisappear 0.2s ease forwards";
        setTimeout(() => {
            shadeZoom.style.display = "none";
            zoomedImg.src = "";
            zoomedImg.title = "";
        }, 400);
    }
});
window.addEventListener("mousemove", (e) => {
    if (shadeZoom.style.display !== "flex") return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    const rotateX = (offsetY / centerY) * 20;
    const rotateY = -(offsetX / centerX) * 20;
    zoomedImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
    const shadowX = -(offsetX / centerX) * 20;
    const shadowY = (offsetY / centerY) * (-20);
    zoomedImg.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4)`;
});
shadeZoom.addEventListener("mouseleave", () => {
    zoomedImg.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    zoomedImg.style.boxShadow = "0 0 0.5rem rgba(0, 0, 0, 0.4)";
});
