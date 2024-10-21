import { fetchFunc } from "./fetchFunc.js";

const number = document.querySelector('#number');
const numberTriviaBtn = document.querySelector('#numberTrivia');

numberTriviaBtn.addEventListener('click', getNumFacts);

async function getNumFacts() {

  const number = document.querySelector('#number').value;
  if (!number) {
    alert('Enter a number'); 
    return; 
  }
  const factUrl = `http://numbersapi.com/${number}/math?json`;
  const triviaUrl = `http://numbersapi.com/${number}/trivia?json`; 

  const fact = await fetchFunc(factUrl); 
  const trivia = await fetchFunc(triviaUrl); 

  console.log(fact, trivia); 
  document.querySelector('#numberFact').textContent = fact.text; 
  document.querySelector('#triviaFact').textContent = trivia.text; 
  
}


