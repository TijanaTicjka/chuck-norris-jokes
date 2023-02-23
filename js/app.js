(function (data, ui) {
    const button = document.getElementById('get-joke');
    const logo = document.getElementById('logo');

    const generateJoke = () =>{
        ui.setAnimation();
        data.getJoke().then(data => ui.showJoke(data))
    }
    
    button.addEventListener("click", generateJoke);
    logo.addEventListener("mouseenter", ui.deleteJoke)
    
})(dataModule, uiModule)