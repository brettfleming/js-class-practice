//selecting the things on the page
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
      const jsonSelection = Math.floor(Math.random() * 10);
      display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
  }

  const changeButton = () => {
    const newText = Math.floor(Math.random() * 7);
    jsonButton.innerHTML = `${collection[newText]}!`;
  }
  
  jsonButton.addEventListener('click', generateJson);