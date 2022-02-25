const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onReadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
                changeButton();
        }
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
}