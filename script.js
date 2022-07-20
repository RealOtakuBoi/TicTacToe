

const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const boxes = document.querySelectorAll("section span");
const players = document.querySelector(".players");


window.onload = () => {

    for(let i = 0; i < boxes.length; i++){
        boxes[i].setAttribute("onclick","clickedBox(this)");
    }


    selectXBtn.addEventListener("click", () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    });

    selectOBtn.addEventListener("click", () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active")
    });
};

let Xicon = "fa-solid fa-xmark";
let Oicon = "fa-solid f-o";

function clickedBox(element){
    if(){

    }
}