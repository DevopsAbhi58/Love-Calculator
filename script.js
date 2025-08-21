'use strict'

const text1 = document.querySelector('.text-1');

const text2 = document.querySelector('.text');

const checkBtn = document.querySelector('.button');

const restartBtn = document.querySelector('.button-btn');

const p1 = document.querySelector('.p1');

const p2 = document.querySelector('.p2');

let playing = true ;

const check = function () {
    return Math.trunc(Math.random() * 100) + 1;
};

const restart = function(){
    text1.value = "";
    text2.value = "";
    p1.classList.add('hidden');
    p2.classList.add('hidden')
}

checkBtn.addEventListener('click', function () {
  if (text1.value === "" || text2.value === "") {
    playing = false;
    return;
  }

  const randomNumber = check();

if (randomNumber > 72) {

   p1.textContent = `You both are compatible ❤️ (${randomNumber}%)`; 
  p1.classList.remove('hidden'); 
  p2.classList.add('hidden'); 
} else {

     p2.textContent = `Aah! You both are not compatible 💔 (${randomNumber}%)`;

  p1.classList.add('hidden'); 
  p2.classList.remove('hidden');    
}

  console.log(randomNumber);
});

restartBtn.addEventListener('click',function(){
restart();
})