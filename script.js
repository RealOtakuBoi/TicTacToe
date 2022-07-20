

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
        players.setAttribute("class", "players active player")
    });
};

let Xicon = "fas fa-times",
Oicon = "far fa-circle";
playerSign = "X"
function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "O";
        element.innerHTML = `<i class="${Oicon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML = `<i class="${Xicon}"></i>`;
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }

    element.style.pointerEvents = "none";
}





