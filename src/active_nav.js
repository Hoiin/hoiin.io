const sectionIds = ['#home', '#about', '#skills', '#works', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));
const isVisible = sectionIds.map(() => false);

function findFirstIndex(booleanList) {
    for (let i = 0; i < booleanList.length; i++) {
        if (booleanList[i]) {
            return i;
        } 
    }
    return 0;
}

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0,0.9]
};
const lastIdx = sectionIds.length - 1
let selectLastOne;
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const visibleItemIdx = sectionIds.indexOf(`#${entry.target.id}`);

        isVisible[visibleItemIdx] = entry.isIntersecting;
        selectLastOne = 
            visibleItemIdx === lastIdx && 
            isVisible[lastIdx] && 
            entry.intersectionRatio >= 0.9;
        console.log(entry.intersectionRatio);
    })

    console.log(isVisible);
    const navIndex = 
        selectLastOne 
        ? sectionIds.length - 1 
        : findFirstIndex(isVisible);

    for (let i = 0; i < navItems.length; i++) {
        if (i===navIndex) {
            navItems[i].classList.add('active');
        } else {
            navItems[i].classList.remove('active');
        }
    }
}, options)

sections.forEach(section => {observer.observe(section)});