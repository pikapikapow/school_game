const cards = document.querySelectorAll(".card")
const restart = document.getElementById("restart-btn")
const counterEl = document.getElementById("count")
// model elements
const close = document.getElementById("close");
const modal = document.getElementById("modal");


// console.log(counterEl);

// console.log(cards)

// card comparing logic

let firstCard = null
let secondCard = null
let hasFlippedCard = false
let blockBoard = false
let counter = 0
let matchedCards = 0



// card flip function

function flipCard() {

  if (blockBoard) return
  this.classList.add("flip")

  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    firstCard.removeEventListener("click", flipCard)
    firstCard.style.cursor = "default"
    return
  } else {
    firstCard.addEventListener("click", flipCard)
    firstCard.style.cursor = "pointer"
    secondCard = this
    hasFlippedCard = false
    counter++

    counterEl.innerHTML = counter
  }

  checkCards()
}




function checkCards() {
  if (firstCard.dataset.planet === secondCard.dataset.planet) {
    disableCards()
    matchedCards = matchedCards + 2
    if (matchedCards === 16) {
      winnerGreet()
    }
    return
  } else {
    unflipCards()
  }
}

function winnerGreet() {
  // console.log("all matched!");
  const modalShow = () => modal.classList.add("show-modal");
  modalShow()
  setTimeout(function () {
    cards.forEach((card) => card.classList.remove("flip"))
    startOver()
  }, 2000)

}



function disableCards() {
  firstCard.removeEventListener("click", flipCard)
  secondCard.removeEventListener("click", flipCard)
}

function unflipCards() {
  blockBoard = true
  setTimeout(function () {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    blockBoard = false
  }, 1000);
}


(function randomize() {
  cards.forEach((card) => {
    let randomizeNumber = Math.floor(Math.random() * cards.length)
    card.style.order = randomizeNumber
  })
})()


function startOver() {
  window.location.reload()
}



cards.forEach((card) => card.addEventListener("click", flipCard))

if (restart) {
  restart.addEventListener("click", startOver)
}


if (close) {
  close.addEventListener("click", () => modal.classList.remove("show-modal"));
}



