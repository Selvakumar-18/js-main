'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnClosemodal = document.querySelector('.close-modal');

const btnShowmodal = document.querySelectorAll('.show-modal');



for (let i=0; i<btnShowmodal.length;i++){
  btnShowmodal[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
}

btnClosemodal.addEventListener('click',function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})

overlay.addEventListener('click',function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})