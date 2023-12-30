// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home에 스크롤이 발생하여 아래로 갈수록 fade out
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
})

// Arrow Button 등장
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY < homeHeight / 2) {
        arrow.classList.add('arrow-up--transparent');
    } else {
        arrow.classList.remove('arrow-up--transparent');
    }
})