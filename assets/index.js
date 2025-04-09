new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 3,
  focusAt: 1,
  classes:{
    activeSlide: "activeSlide"
  }
}).mount()