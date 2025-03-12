const slidesContainer = document.getElementsByClassName("carousel"); 
const slide = document.querySelector(".slide"); 
const leftArrow = document.querySelector(".left-arrow"); 
const rightArrow = document.querySelector(".right-arrow"); 


rightArrow.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer[0].scrollLeft += slideWidth + 10;
  });
leftArrow.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer[0].scrollLeft -= slideWidth * 1.01;
  });