const Slide = {
  count: 0,

  init() {
    if (this.count <= 0) $('.prev').hide()

    setInterval(function () {
      Slide.next()
    }, 5000)
  },

  move() {
    this.count ? $('.prev').show() : $('.prev').hide()
    $('.banner').css({ marginLeft: -100 * this.count + '%' })
    $('.navigation > div')
      .eq(this.count)
      .addClass('active')
      .siblings()
      .removeClass('active')
  },

  next() {
    this.count = this.count >= 9 ? 0 : this.count + 1
    this.move()
  },

  prev() {
    this.count -= 1
    this.move()
  },
}

Slide.init()

$(window).on('scroll', function () {
  const y = window.scrollY + $(window).height()

  if (y >= $('.model').offset().top) {
    $('.model').animate({ opacity: 1 }, 1000)
  }

  if (y >= $('.h3-tit').offset().top) {
    $('.h3-tit').animate({ top: 0, opacity: 1 }, 1000)
  }

  if (y >= $('.main-slide').offset().top) {
    $('.main-slide').addClass('in-view')
    $('.navigation-item').addClass('in-view')
  }
  if (y >= $('.h1_tit_center').offset().top) {
    $('.h1_tit_center').addClass('in-view')
    $('.tools_icons').addClass('in-view')
  }
  if (window.scrollY >= $('.models').offset().top) {
    $('.scroll-up').show()
  } else {
    $('.scroll-up').hide()
  }
})

$(document)
  .on('click', '.prev', function () {
    Slide.prev()
  })
  .on('click', '.next', function () {
    Slide.next()
  })
  .on('click', '.navigation > div', function () {
    Slide.count = $(this).index()
    Slide.move()
  })

let count = 0

$('.car-next').on('click', function () {
  count += 1
  if (count >= 4) $(this).hide()

  $('.main-slide').css({ marginLeft: '-480' * count + 'px' })

  $('.car-prev').show()

  $('.navigation-item > div')
    .eq(count)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

$('.car-prev').on('click', () => {
  count -= 1

  $('.car-next').show()

  $('.navigation-item > div')
    .eq(count)
    .addClass('active')
    .siblings()
    .removeClass('active')

  if (count === 0) {
    $('.car-prev').hide()
  } else {
    $('.car-prev').show()
  }

  $('.main-slide').css({ marginLeft: '-480' * count + 'px' })
})
// dot 버튼 클릭했을때
$('.navigation-item > div').on('click', function () {
  count = $(this).index()

  if (count === 0) $('.car-prev').hide()
  else $('.car-prev').show()
  if (count === 4) $('.car-next').hide()
  else $('.car-next').show()

  $('.main-slide').css({ marginLeft: '-480' * count + 'px' })
  $(this).addClass('active').siblings().removeClass('active')
})

$('.car-prev').hide()

$('.scroll-up').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 600)
})
