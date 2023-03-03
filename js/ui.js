"use strict";
const uiModule = (function(){
    const logo = document.getElementById('logo');
    const boxForJoke = document.querySelector(".joke");

    const setAnimation = () => {
        logo.classList.add('animate__animated', 'animate__tada');
        setTimeout(() => {
            logo.classList.remove('animate__animated', 'animate__tada');
        }, 1000)
    }

    const showJoke = (joke) => {
        const jokeText = `<p>${joke.joke}</p>`;
        boxForJoke.innerHTML = jokeText;
        boxForJoke.style.display="block";
    }

    const deleteJoke = () => {
        boxForJoke.style.display="none";
    }

    return {
        setAnimation,
        showJoke,
        deleteJoke 
    }
})()