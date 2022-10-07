console.log("Welcome to Liang4793's Repository!");

/* notice */
let showNotice = "True";
let notice = document.querySelector(".notice");
let noticeBtn = document.querySelectorAll(".noticeBtn");

console.log("showNotice =>", showNotice);

if (showNotice == "True") {
    notice.style.display = "block";
    notice.style.animation = "noticePop 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 normal forwards";
    noticeBtn[1].addEventListener("click", () => {
        notice.style.animation = "noticeClose 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 normal forwards";
        setTimeout(() => {
            notice.style.display = "none";
        }, 400);
        console.log("notice closed by user");
    });
}

/* title */
document.getElementById("titleLight").innerHTML = "Discover";
setTimeout(() => { document.getElementById("titleLight").innerHTML = "Explore" }, 3000);
setTimeout(() => { document.getElementById("titleLight").innerHTML = "Establish" }, 6000);
var changeTitle = function () {
    document.getElementById("titleLight").innerHTML = "Discover";
    setTimeout(() => { document.getElementById("titleLight").innerHTML = "Explore" }, 3000);
    setTimeout(() => { document.getElementById("titleLight").innerHTML = "Establish" }, 6000);
};
setInterval(changeTitle, 9000);


/* introBox */
let switchBtn = document.getElementById("switchBtn");
let mA = document.getElementById("mA");
let mB = document.getElementById("mB");
let cA = document.getElementById("cA");
let cB = document.getElementById("cB");
let cC = document.getElementById("cC");
let cD = document.getElementById("cD");
let cE = document.getElementById("cE");
let cF = document.getElementById("cF");
var switchState = "A";

switchBtn.addEventListener("click", () => {
    if (switchState == "A") {
        switchState = "B";
        console.log("switchState =>", switchState);
        //switched to B
        mA.style.animation = "mAtoR 0.2s ease forwards";
        mB.style.animation = "mBtoL 0.2s ease forwards";

        cA.style.animation = "leftClose 0.2s ease forwards";
        cB.style.animation = "leftClose 0.2s ease forwards";
        cC.style.animation = "leftClose 0.2s ease forwards";
        cD.style.animation = "leftClose 0.2s ease forwards";
        setTimeout(() => {
            mA.style.zIndex = "1";
            mB.style.zIndex = "2";
            mA.style.animation = "mAbackL 0.2s ease forwards";
            mB.style.animation = "mBbackR 0.2s ease forwards";

            cA.style.display = "none";
            cB.style.display = "none";
            cC.style.display = "none";
            cD.style.display = "none";
            cE.style.display = "block";
            cF.style.display = "block";
            cE.style.animation = "leftPop 0.2s ease forwards";
            cF.style.animation = "leftPop 0.22s ease forwards";
        }, 200);
    } else {
        if (switchState == "B") {
            switchState = "A";
            console.log("switchState =>", switchState);
            //switched to A
            mA.style.animation = "mAtoL 0.2s ease forwards";
            mB.style.animation = "mBtoR 0.2s ease forwards";

            cE.style.animation = "leftClose 0.2s ease forwards";
            cF.style.animation = "leftClose 0.2s ease forwards";
            setTimeout(() => {
                mA.style.zIndex = "2";
                mB.style.zIndex = "1";
                mA.style.animation = "mAbackR 0.2s ease forwards";
                mB.style.animation = "mBbackL 0.2s ease forwards";

                cE.style.display = "none";
                cF.style.display = "none";
                cA.style.display = "block";
                cB.style.display = "block";
                cC.style.display = "block";
                cD.style.display = "block";
                cA.style.animation = "leftPop 0.2s ease forwards";
                cB.style.animation = "leftPop 0.22s ease forwards";
                cC.style.animation = "leftPop 0.24s ease forwards";
                cD.style.animation = "leftPop 0.26s ease forwards";
            }, 200);
        } else {
            console.log("switchState => Error");
        }
    }
})

/* SWBox */
let SWBox = document.getElementById("SWBox");
let SWText = document.getElementById("SWText");
let SWChartBox = document.getElementById("SWChartBox");
const ResizeSWChartBox = () => {
    var SWBoxW = SWBox.clientWidth;
    if (SWBoxW > 360) {
        var SWBoxH = SWBox.clientHeight;
        var SWTextH = SWText.clientHeight;
        var SWChartBoxH = SWBoxH - SWTextH - 10;
        SWChartBox.style.height = SWChartBoxH + "px";
    } else {
        var SWChartBoxH = 200;
        SWChartBox.style.height = SWChartBoxH + "px";
    }
};
window.onload = () => {
    ResizeSWChartBox();
}
window.onresize = () => {
    ResizeSWChartBox();
}

