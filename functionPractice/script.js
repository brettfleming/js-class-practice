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

  function randomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upper[Math.floor(Math.random() * 26)]
  }
  function randomNumber() {
    return Math.floor(Math.random() * 10)
  }

  function randomSymbol() {
    const symbols = "!@#$%^&*(){}[]?"
    return symbols[Math.floor(Math.random() * symbols.length)]
  }
  function randomSymbol2() {
    const symbols2 = "-_=+d`~/\|<>"
    return symbols2[Math.floor(Math.random() * symbols2.length)]
  }
