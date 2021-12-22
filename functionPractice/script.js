const passwordElement = document.getElementById('password')
const generateElement = document.getElementById('generate')



const lengthElement = document.getElementById('length')
const lowercaseElement = document.getElementById('lowercase')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const symbols2Element = document.getElementById('symbols2')


const randomfunction = {
    lowercase: randomLower,
    uppercase: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
    symbol2: randomSymbol2
  };

  function randomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    return lower[Math.floor(Math.random() * 26)]
  }