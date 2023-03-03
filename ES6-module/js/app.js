import { getJoke } from "./data.js";
import { setAnimation, showJoke, deleteJoke } from "./ui.js";
    
const button = document.getElementById('get-joke');
const logo = document.getElementById('logo');

const generateJoke = () => {
    setAnimation();
    getJoke().then(data => showJoke(data));
}

button.addEventListener("click", generateJoke);
logo.addEventListener("mouseenter", deleteJoke);