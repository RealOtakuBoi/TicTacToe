

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

function clickedBox(element){
    if(players.classList.contains("player")){
        element.innerHTML = `<i class="${Oicon}"></i>`;
        players.classList.remove("active");
    }else{
        element.innerHTML = `<i class="${Xicon}"></i>`;
    }

    element.style.pointerEvents = "none";
    bot();
}





function bot(){
    let array = [];
    for(let i = 0; i<boxes.length; i++){
        if(boxes[i].childElementCount == 0){
            array.push(i);
        }
    }

    let randomBox = array[Math.floor(Math.random()*array.length)];
    console.log(randomBox);

}