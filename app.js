const cards = document.querySelectorAll(".card")

console.log(cards)

const flipCard = (element) => {
  element.classList.toggle("flip")
}

cards.forEach(card => card.addEventListener("click", flipCard(cards)))

