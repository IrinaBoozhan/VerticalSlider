const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const audio = document.querySelector('.audio')
const btnMusic = document.querySelector('.music')

const container = document.querySelector('.container')



let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
   changeSlide('up')
})

downBtn.addEventListener('click', () => {
   changeSlide('down')
})


//перелистывание слайдов с клавиатуры

document.addEventListener('keydown',
   event => {
      if (event.key === 'ArrowUp') {
         changeSlide('up')
      }
      else if (event.key === 'ArrowDown') {
         changeSlide('down')
      }
   })


//горизонтальноее перелистывание

btnPrev.addEventListener('click', () => { changeSlide('up') })
btnNext.addEventListener('click', () => { changeSlide('down') })


//перелистывание слайдов колесом мыши 

document.addEventListener('wheel', function (event) {
   event = event || window.event;
   let y = event.deltaY || event.detail || event.wheelDelta;
   if (y > 0) {
      changeSlide('up')
   }
   else if (y < 0) {
      changeSlide('down')
   }
});


//вкл и выкл мелодию
btnMusic.addEventListener('click', () => { audio.muted = !audio.muted; btnMusic.classList.toggle("line") });








function changeSlide(direction) {
   if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === slidesCount) {
         activeSlideIndex = 0
      }
   }
   if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
         activeSlideIndex = slidesCount - 1
      }
   }

   const height = container.clientHeight


   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}