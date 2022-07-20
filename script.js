

const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");

window.onload = () => {
    selectBox.addEventListener("click", () => {
        selectBox.classList.add("hide")
    });
};