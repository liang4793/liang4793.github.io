console.log("Welcome to Liang4793's Repository!");

/* notice */
let show_notice = "True";
let notice_box = document.querySelector(".notice_box");
let notice_box_button = document.querySelectorAll(".notice_box_button");

console.log('show_notice',show_notice);

if (show_notice == "True") {
    notice_box.style.display = "block";
    notice_box.style.animation = "notice_box_pop 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 normal forwards";

    notice_box_button[1].addEventListener("click", () => {
        notice_box.style.display = "none";
        console.log("notice closed by user")
    });
}

/* page */