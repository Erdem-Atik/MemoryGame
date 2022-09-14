//card options
const cardArray = [
  {
    img: "images/fries.png",
  },
  {
    img: "images/cheeseburger.png",
  },
  {
    img: "images/ice-cream.png",
  },
  {
    img: "images/pizza.png",
  },
  {
    img: "images/milkshake.png",
  },
  {
    img: "images/hotdog.png",
  },
  {
    img: "images/fries.png",
  },
  {
    img: "images/cheeseburger.png",
  },
  {
    img: "images/ice-cream.png",
  },
  {
    img: "images/pizza.png",
  },
  {
    img: "images/milkshake.png",
  },
  {
    img: "images/hotdog.png",
  },
];
// shuffle cards
const cardMixer = function () {
  return cardArray.sort(() => 0.5 - Math.random());
};

cardMixer();

console.log(cardArray);

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenId = [];
// close the cards in case not matching
const init = function () {
  let cardsChosen = [];
  let cardsChosenId = [];
  board.forEach((el) => {
    el.src = `images/blank.png`;
  });
};
//create the board
const createBoard = function () {
  cardArray.forEach((el, i) => {
    const markup = `<img src="images/blank.png" class="${i}">`;
    grid.insertAdjacentHTML("beforeend", markup);
  });
};

createBoard();

const board = document.querySelectorAll("img");
// check the selected cards according to matching
const cardController = function (arr) {
  const option1 = cardsChosenId[0];
  const option2 = cardsChosenId[1];

  if (arr[0] === arr[1]) {
    alert("Nice! You found a match");
    board[option1].classList.add("chosen"); //  add a 'chosen' class(css class) to matched cards
    board[option2].classList.add("chosen");
  } else {
    alert("Sorry, try again");
    init();
  }
  cardsChosen = [];
  cardsChosenId = [];
  // convert from NodeList to an array
  const boardConvert = Array.from(board);
  // express the score. count the 'chosen' class
  const score =
    Math.abs(boardConvert.filter((el) => el.classList[1] === "chosen").length) /
    2;
  resultDisplay.innerHTML = score;
  // if all cards are matched, it displays 'you win'
  const indicator = boardConvert.every((el) =>
    el.classList.value.includes("chosen")
  );
  if (indicator) {
    resultDisplay.innerHTML = "Congrat! You win; game over";
    grid.removeEventListener("click", flipCard);
  }
};
//flip the selected cards
const flipCard = function (e) {
  const clicked = e.target;
  const selected = clicked.classList[0];
  if (cardsChosen.length < 2) {
    cardsChosen.push(cardArray[selected].img);
    cardsChosenId.push(selected);
    board.forEach((el) => {
      if (el.classList[0] === selected) {
        el.src = `${cardArray[selected].img}`;
      }
    });
  }
  if (cardsChosen.length === 2) {
    setTimeout(() => {
      cardController(cardsChosen);
    }, 500);
  }
};

grid.addEventListener("click", flipCard);

//test
