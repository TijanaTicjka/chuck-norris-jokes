const uiModule = (function(){
    const logo = document.getElementById('logo');
    const setAnimation = () => {
        logo.classList.add('animate__animated', 'animate__tada');
        setTimeout(() => {
            logo.classList.remove('animate__animated', 'animate__tada');
        }, 1000)
    }

    return {
        setAnimation,
    }
})()