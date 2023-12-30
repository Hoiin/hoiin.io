'use strict';

// 1. Show default model description 
const selectedModels = document.querySelectorAll('.model');
for (let i = 0; i < selectedModels.length; i++) {
    if (i !== 0) {
        selectedModels[i].style.display = 'none';
    } 
}

// 2. Works Filtering
const modelsIntro = document.querySelector('.models_intro');
handleActiveSelection(modelsIntro);


// Util Functions
function activateModelButtion(event) {
    const selected = document.querySelector('.model--selected');
    selected.classList.remove('model--selected');
    event.target.classList.add('model--selected');
}
function filterWhichModelToShow(selectedModels, filter) {
    selectedModels.forEach((model) => {
        if (filter == model.dataset.type) {
            model.style.display = 'block';
        } else {
            model.style.display = 'none';
        }
    }); 
}
function handleActiveSelection(unsortedList) {
    unsortedList.addEventListener('click', (event) => {
        const filter = event.target.dataset.model;
        if (filter == null) {
            return;
        }
    
        // Active button 
        activateModelButtion(event);
    
        // Filtering
        filterWhichModelToShow(selectedModels, filter);
    });
}