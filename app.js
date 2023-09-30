const cards = document.querySelectorAll(".card")
const restart = document.getElementById("restart-btn")

console.log(cards)

// card comparing logic

let firstCard = null
let secondCard = null
let hasFlippedCard = false



// card flip function

function flipCard() {
  this.classList.add("flip")

  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    return
  } else {
    secondCard = this
    hasFlippedCard = false
  }
  disableAllCards()
  checkCards()


}

function disableAllCards() {
  cards.forEach((card) => card.removeEventListener("click", flipCard))
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
  setTimeout(function () {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 1500);
}

function startOver() {
  // cards.forEach((card) => card.classList.remove("flip"))
  // console.log(firstCard, secondCard, hasFlippedCard);
  window.location.reload()
}



cards.forEach((card) => card.addEventListener("click", flipCard))

restart.addEventListener("click", startOver)



