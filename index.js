console.log("Welcome to Liang4793's Repository!");

/* notice */
let showNotice = "True";
let noticeBox = document.querySelector(".notice_box");
let noticeBoxButton = document.querySelectorAll(".notice_box_button");

console.log('showNotice =>',showNotice);

if (showNotice == "True") {
    noticeBox.style.display = "block";
    noticeBox.style.animation = "notice_box_pop 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 normal forwards";

    noticeBoxButton[1].addEventListener("click", () => {
        noticeBox.style.display = "none";
        console.log("notice closed by user")
    });
}

/* page */