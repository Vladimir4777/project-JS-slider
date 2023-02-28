const sliderLine = document.querySelector('.img__wrap');
const prevArrow = document.querySelector('#left');
const nextArrow = document.querySelector('#right');
const dots = document.querySelectorAll('.dots');
const list = document.querySelectorAll('.projects__item');
const link = document.querySelectorAll('.projects__link');


let position = 0;
let dotIndex = 0;

const nextSlide = () => {
    if(position < (dots.length -1) * 679){
        position += 679;
        dotIndex++;
    }else{
        position = 0;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
    thisLink(dotIndex);
    
}

const prevSlide = () => {
    if(position > 0){
        position -= 679;
        dotIndex--;
    }else{
        position = (dots.length -1) * 679;
        dotIndex = (dots.length -1);

    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
    thisLink(dotIndex);
   
}

function thisLink (index) {
    for(let item of link){
        item.classList.remove('active-link');
    }
    link[index].classList.add('active-link');
}


function thisSlide (index) {
    for(let dot of dots){
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

dots.forEach ((dot, index) => {
    dot.addEventListener('click', () => {
        position = 679 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        thisLink(dotIndex);
    })
})

list.forEach ((item, index) => {
    item.addEventListener('click', () => {
        position = 679 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        thisLink(dotIndex);
    })
})

