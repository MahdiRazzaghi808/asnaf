var acc = document.getElementsByClassName("accordion");
var allPanel = document.querySelectorAll(".panel");
var allArrow = document.querySelectorAll(".accordion img");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight === "15rem") {
            panel.style.maxHeight = 0;
            this.querySelector("img").src = './asset/icon/arrow-next.svg';

        } else {
            allPanel.forEach(element => {
                element.style.maxHeight = 0;
            });
            allArrow.forEach(element => {
                element.src = './asset/icon/arrow-next.svg'
            })
            
            panel.style.maxHeight = "15rem";
            this.querySelector("img").src = './asset/icon/arrow-down.svg';

        }
    });
}