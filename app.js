const cards = document.querySelectorAll(".card")
const restart = document.getElementById("restart-btn")
const counterEl = document.getElementById("count")
console.log(counterEl);

console.log(cards)

// card comparing logic

let firstCard = null
let secondCard = null
let hasFlippedCard = false
let blockBoard = false
let counter = 0




// card flip function

function flipCard() {

  if (blockBoard) return



  this.classList.add("flip")

  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    return
  } else {
    secondCard = this
    hasFlippedCard = false
    counter++
    counterEl.innerHTML = counter
  }

  checkCards()


}



function checkCards() {
  console.log(firstCard, secondCard);
  if (firstCard.dataset.planet === secondCard.dataset.planet) {
    disableCards()
    return
  } else {
    unflipCards()
  }

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
  }, 1500);
}

function startOver() {
  // cards.forEach((card) => card.classList.remove("flip"))
  // console.log(firstCard, secondCard, hasFlippedCard);
  window.location.reload()
}



cards.forEach((card) => card.addEventListener("click", flipCard))

restart.addEventListener("click", startOver)



