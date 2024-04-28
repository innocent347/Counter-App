

let count = 0;

const numberDisplay = document.querySelector(".number h1");
const btn = document.querySelectorAll(".btn");

btn.forEach(function(bt) {
    bt.addEventListener("click", function(event) {
        const clickedBtn = event.currentTarget;
        const btnClass = clickedBtn.classList;

        if (btnClass.contains("inc")) {
            count++;
        } else if (btnClass.contains("dec")) {
            count--;
        } else if (btnClass.contains("reset")) {
            count = 0;
        }

        numberDisplay.textContent = count;
    });
});

