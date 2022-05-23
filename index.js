let notice_box = document.querySelector(".notice_box");
let notice_box_button = document.querySelectorAll(".notice_box_button");
notice_box_button[1].addEventListener("click", () => {
    notice_box.style.display = "none";
});