//selecting the elements on the page
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
//the collections array
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = () => {
    const xhr = new XMLHttpRequest();
    //the responseType is in Json
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
    renderResponse(xhr.response);
        changeButton();
      }
    }
    //The Get request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
  }

const formatJson = (resJson) => {
  //using srtingify to turn the JSon to a string
    resJson = JSON.stringify(resJson);
    let counter = 0;
    return resJson.split('')
    .map(char => {
      switch (char) {
        case ',':
          return `,\n${' '.repeat(counter * 2)}`;
        case '{':
          counter += 1;
          return `{\n${' '.repeat(counter * 2)}`;
        case '}':
          counter -= 1;
          return `\n${' '.repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join('');
  }
  const renderResponse = (jsonResponse) => {
    //Math.Floor makes the random number a whole number when using Math.Random
      const jsonSelection = Math.floor(Math.random() * 10);
      display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
  }

  const changeButton = () => {
    const newText = Math.floor(Math.random() * 7);
    //setting the innerHTML to the collection arrray value that is randomly generated
    jsonButton.innerHTML = `${collection[newText]}!`;
  }
  //This is the event Listner that is listner for a click on the JSonButton
  jsonButton.addEventListener('click', generateJson);


//This code just shows the concelpt of looping events the setTimeout function will alwasy run last no matter what the time is set to
  // console.log('First message!');
  // setTimeout(() => {
  //   console.log('This message will always run last...');
  // }, 2500);
  // console.log('Second message!');

  const xhr = new XMLHttpRequest();
  const url = 'https://api-to-call.com/endpoint';

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      return xhr.response
    }
  }

  xhr.open('GET', url);
xhr.send();

// Information to reach API
const url = 'https://api.datamuse.com/words?'
//this helps narrow down the search to words that rhyme
const queryParams = 'rel_rhy='

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


const getSuggestions = () => {
  const wordQuery = inputField.value
  const endpoint = url + queryParams + wordQuery
  const xhr = new XMLHttpRequest;

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
  }
xhr.open('GET', endpoint)
xhr.send()
}


const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);