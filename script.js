const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const boxes = document.querySelectorAll("section span");
const players = document.querySelector(".players");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");

window.onload = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.addEventListener("click", () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    });

    selectOBtn.addEventListener("click", () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
    });
};

let Xicon = "fas fa-times",
    Oicon = "far fa-circle",
    playerSign = "X",
    runBot = true;

function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${Oicon}"></i>`;
        playerSign = "O";
        element.setAttribute("id", playerSign);
        players.classList.remove("active");
    } else {
        element.innerHTML = `<i class="${Xicon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }

    selectWinner();

    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none";
    let delay = (Math.random() * 1000 + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, delay);
}

function bot(runBot) {
    if (runBot) {
        playerSign = "O";
        let array = [];
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].childElementCount == 0) {
                array.push(i);
            }
        }

        let randomBox = array[Math.floor(Math.random() * array.length)];

        if (array.length > 0) {
            if (players.classList.contains("player")) {
                boxes[randomBox].innerHTML = `<i class="${Xicon}"></i>`;
                players.classList.add("active");
                playerSign = "X";
                boxes[randomBox].setAttribute("id", playerSign);
            } else {
                boxes[randomBox].innerHTML = `<i class="${Oicon}"></i>`;
                players.classList.remove("active");
                boxes[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        playBoard.style.pointerEvents = "auto";
        boxes[randomBox].style.pointerEvents = "none";
        playerSign = "X";
    }
}

function getIdVal(idname) {
    return document.querySelector(".box" + idname).id;
}

function checkIdSign(vali1, vali2, vali3, sign) {
    if (
        getIdVal(vali1) == sign &&
        getIdVal(vali2) == sign &&
        getIdVal(vali3) == sign
    ) {
        return true;
    }
}

function selectWinner() {
    if (
        checkIdSign(1, 2, 3, playerSign) ||
        checkIdSign(4, 5, 6, playerSign) ||
        checkIdSign(7, 8, 9, playerSign) ||
        checkIdSign(1, 4, 7, playerSign) ||
        checkIdSign(2, 5, 8, playerSign) ||
        checkIdSign(3, 6, 9, playerSign) ||
        checkIdSign(1, 5, 9, playerSign) ||
        checkIdSign(3, 5, 7, playerSign)
    ) {
        runBot = false;
        bot(runBot);

        setTimeout(() => {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 500);
        wonText.innerHTML = `Player <p>${playerSign}</p> Won The Game!`;
    } else {
        if (
            getIdVal(1) != "" &&
            getIdVal(2) != "" &&
            getIdVal(3) != "" &&
            getIdVal(4) != "" &&
            getIdVal(5) != "" &&
            getIdVal(6) != "" &&
            getIdVal(7) != "" &&
            getIdVal(8) != "" &&
            getIdVal(9) != ""
        ) {
            runBot = false;
            bot(runBot);

            setTimeout(() => {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 500);
            wonText.innerHTML = `Match Resulted in a Draw`;
        }
    }
}



replayBtn.addEventListener("click", ()=>{
    window.location.reload();
})