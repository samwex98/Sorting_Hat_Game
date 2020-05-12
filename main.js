var id_ = 'listId';
var cols_ = document.querySelectorAll('#' + id_ + ' .list');
var dragSrcEl_ = null;

var temp;
var arr = [];
var h1 = document.getElementById("algorithm");
var h2 = document.getElementById("count"), counter = 0;
var h3 = document.getElementById("round"), round = 1;
var h4 = document.getElementById("limit"), limit;
var bubbleSort = false;
var selectionSort = false;
var loss = false;
var win = false;


for (let i = 0; i < 9; i++) {
    arr[i] = document.getElementsByClassName("list-item")[i].id[3];
}

//shuffle and rename
function shuffleArr() {
    var currentIndex = arr.length, temp, rand;
    while (0 != currentIndex) {
        rand = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp = arr[currentIndex];
        arr[currentIndex] = arr[rand];
        arr[rand] = temp;
    }
}

function resetArr() {
    for (let i = 1; i < 10; i++) {
        document.getElementById("new" + i).id = "old" + i;
    }
}

function changeArrName() {
    for (let i = 1; i < 10; i++) {
        document.getElementById("old" + i).id = "new" + arr[i - 1];
    }
}

//reorder
function reorderArr() {
    for (let i = 0; i < 9; i++) {
        arr.splice(i, 1, document.getElementsByClassName("list-item")[i].id[3]);
    }
    console.log("hello", arr);
}

function victoryCheck() {
    var count = 0;
    for (let i = 0; i < 9; i++) {
        if (arr[i] == i + 1) {
            count++;
        }
    }
    if (count == 9 && !loss) {
        win = true;
        var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(assets/backgrounds/happy_faces.png)';
        round++;
        if (round == 9) {
            setTimeout(endScreen, 1000);
        }
        else if (round < 9) {
            setTimeout(nextScreen, 1000);
        }
    }
}

function Loss() {
    loss = true;
    if (!win) {
        document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/backgrounds/upset_faces.png)';
        setTimeout(gameOverScreen, 1000);
    }
}



shuffleArr();
changeArrName();
document.getElementById("new1").src = "assets/hats/tophat_red.png";
document.getElementById("new2").src = "assets/hats/tophat_orange2.png";
document.getElementById("new3").src = "assets/hats/tophat_yellow.png";
document.getElementById("new4").src = "assets/hats/tophat_yellowgreen.png";
document.getElementById("new5").src = "assets/hats/tophat_green_.png";
document.getElementById("new6").src = "assets/hats/tophat_blue.png";
document.getElementById("new7").src = "assets/hats/tophat_purple.png";
document.getElementById("new8").src = "assets/hats/tophat_pink.png";
document.getElementById("new9").src = "assets/hats/tophat_white.png";

function endScreen() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/backgrounds/gameEnd.png)';
    document.getElementById("listId").style.display = 'none';
    document.getElementsByTagName('header')[0].style.display = 'none';


}

function gameOverScreen() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/backgrounds/gameOver.png)';
    document.getElementById("listId").style.display = 'none';
    document.getElementById("exitButton").style.display = 'flex';
    document.getElementById("retryButton").style.display = 'flex';
}

function returnScreen() {
    document.getElementById("exitButton").style.display = 'none';
    document.getElementById("retryButton").style.display = 'none';
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/hatDisplay.png)';
    document.getElementById("playButton").style.display = 'flex';
    document.getElementsByTagName('header')[0].style.display = 'none';
    round = 1;
    counter = 0;
}


function nextScreen() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/backgrounds/NextRound.png)';
    document.getElementById("listId").style.display = 'none';
    document.getElementById("nextButton").style.display = 'flex';
}


function nextRound() {
    document.getElementById("exitButton").style.display = 'none';
    document.getElementById("retryButton").style.display = 'none';
    resetArr();
    shuffleArr();
    changeArrName();
    document.getElementById("new1").src = "assets/hats/tophat_red.png";
    document.getElementById("new2").src = "assets/hats/tophat_orange2.png";
    document.getElementById("new3").src = "assets/hats/tophat_yellow.png";
    document.getElementById("new4").src = "assets/hats/tophat_yellowgreen.png";
    document.getElementById("new5").src = "assets/hats/tophat_green_.png";
    document.getElementById("new6").src = "assets/hats/tophat_blue.png";
    document.getElementById("new7").src = "assets/hats/tophat_purple.png";
    document.getElementById("new8").src = "assets/hats/tophat_pink.png";
    document.getElementById("new9").src = "assets/hats/tophat_white.png";
    startGame();

}


function introScreen() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/inBetween.png)'
    document.getElementById("playButton").style.display = 'none';
    document.getElementById("startButton").style.display = 'flex';
}


function startGame() {
    win = false;
    loss = false;
    counter = 0;
    h3.innerHTML = "Round: " + round;
    h2.innerHTML = "Current Moves: " + counter;
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/backgrounds/neutral_faces.png)';
    document.getElementById("listId").style.display = 'flex';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("nextButton").style.display = 'none';
    document.getElementsByTagName('header')[0].style.display = 'flex';
    if (round % 2 == 1) {
        limit = 29 - round;
        h4.innerHTML = "Limit: " + limit;
        bubbleSort = true;
        selectionSort = false;
        h1.innerHTML = "Bubble Sort";
    }
    if (round % 2 == 0) {
        limit = 19 - round;
        h4.innerHTML = "Limit: " + limit;
        selectionSort = true;
        bubbleSort = false;
        h1.innerHTML = "Selection Sort";
    }


}
//start Sort
this.handleDragStart = function (e) {

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    dragSrcEl_ = this;
    this.classList.add('moving');

    //console.log(this.children[0].innerHTML);
    temp = parseInt(this.id[5], 10);
    counter++;
    h2.innerHTML = "Current Moves: " + counter;
    if (counter >= limit) {
        Loss();
    }
};
this.handleDragOver = function (e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
};
this.handleDragEnter = function (e) {
    this.classList.add('over');
};
this.handleDragLeave = function (e) {
    this.classList.remove('over');
};
this.handleDrop = function (e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (bubbleSort) {

        if (dragSrcEl_ != this && (this.id == "spot_" + (temp + 1)) || (this.id == "spot_" + (temp - 1))) {
            dragSrcEl_.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            reorderArr();
            victoryCheck();
        }
    }

    else if (selectionSort) {
        if (dragSrcEl_ != this) {
            dragSrcEl_.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            reorderArr();
            victoryCheck();
        }
    }

    return false;
};
this.handleDragEnd = function (e) {
    [].forEach.call(cols_, function (col) {
        col.classList.remove('over');
        col.classList.remove('moving');
    });
};
[].forEach.call(cols_, function (col) {
    col.setAttribute('draggable', 'true');
    col.addEventListener('dragstart', this.handleDragStart, false);
    col.addEventListener('dragenter', this.handleDragEnter, false);
    col.addEventListener('dragover', this.handleDragOver, false);
    col.addEventListener('dragleave', this.handleDragLeave, false);
    col.addEventListener('drop', this.handleDrop, false);
    col.addEventListener('dragend', this.handleDragEnd, false);
});
