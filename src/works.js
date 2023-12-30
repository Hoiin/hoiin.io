'use strict';

// Show default model description 
const selectedModels = document.querySelectorAll('.model');
for (let i = 0; i < selectedModels.length; i++) {
    if (i !== 0) {
        selectedModels[i].style.display = 'none';
    } 
}

// Works Filtering
const modelsIntro = document.querySelector('.models_intro');
const modelList = document.querySelector('.models');
modelsIntro.addEventListener('click', (event) => {
    const filter = event.target.dataset.model;
    if (filter == null) {
        return;
    }

    // Active button 
    const selected = document.querySelector('.model--selected');
    selected.classList.remove('model--selected');
    event.target.classList.add('model--selected');

    // Filtering
    selectedModels.forEach((model) => {
        if (filter == model.dataset.type) {
            model.style.display = 'block';
        } else {
            model.style.display = 'none';
        }
    }); 
});