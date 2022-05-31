$( document ).ready(function() {
    console.log( "ready!" );
});

const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const dict = JSON.parse(testdata);

// let words = {
//     "Astronomy": "천문",
//     "Win award": "수상하다",
//     "Competition": "대회",
//     "Come in first place": "종합 1위를 차지하다",
//     "to follow/succeed": "뒤를 잇다",
//     "to compete against":"겨루다",
//     "to have a remarkable achievement": "쾌거를 이루다",
// }

// let data = Object.entries(words);

console.log(dict.term);
console.log(dict.definition);

function getRandomWord() {
// randomTerm = data[Math.floor(Math.random() * data.length)]
term.innerHTML = `<h3>${dict.term}</h3>`;
definition.innerHTML = `<h3>${dict.definition}</h3>`;
}

checkButton.addEventListener('click', function() {
  definition.style.display = "block";
});

nextButton.addEventListener('click', function() {
  definition.style.display = "none";
  getRandomWord();
});
