const answerOne = document.getElementById('a1');
const questionOne = document.getElementById('q1');
const answerTwo = document.getElementById('a2');
const questionTwo = document.getElementById('q2');
const answerThree = document.getElementById('a3');
const questionThree = document.getElementById('q3');
const answerFour = document.getElementById('a4');
const questionFour = document.getElementById('q4');
const answerFive = document.getElementById('a5');
const questionFive = document.getElementById('q5');
const answerSix = document.getElementById('a6');
const questionSix = document.getElementById('q6');

questionOne.addEventListener("click", function(){
    answerOne.classList.toggle("invisible");
})

questionTwo.addEventListener("click", function(){
    answerTwo.classList.toggle('invisible');
})

questionThree.addEventListener("click", function(){
    answerThree.classList.toggle('invisible');
})

questionFour.addEventListener("click", function(){
    answerFour.classList.toggle('invisible');
})

questionFive.addEventListener("click", function(){
    answerFive.classList.toggle('invisible');
})

questionSix.addEventListener("click", function(){
    answerSix.classList.toggle('invisible');
})