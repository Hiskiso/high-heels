new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 3,
  focusAt: 1,
  classes: {
    activeSlide: "activeSlide"
  },
  breakpoints:{
    1080:{
      perView: 2
    },
    830: {
      perView: 1
    }
  }
}).mount()

let openModalButton = document.getElementById("openModalButton")
let closeModalButton = document.getElementById("closeModalButton")
let modal = document.getElementById("modal")

openModalButton.addEventListener("click", () => {
  modal.style.display = "flex"
})
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"
}) 