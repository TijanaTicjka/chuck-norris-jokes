class ChuckNorrisJoke{
    constructor (joke) {
        this.joke = joke;
    }

}

export const getJoke = () => {
    return fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(joke => {return new ChuckNorrisJoke(joke.value)})
}