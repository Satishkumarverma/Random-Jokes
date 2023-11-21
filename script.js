const Hindi_Joke_API_Key = ""; //Enter your joke API key from "https://hindi-jokes-api.onrender.com/"
const English_Joke_API_Key = ""; //Enter your joke from "https://rapidapi.com/hub"
// Hindi Jokes
function changehindijoke() {
    let loder = `<img src="image/loader/Ellipsis-3.8s-200px.gif" alt="loader">`
    hindi.innerHTML = loder;
    const Joke_API = `https://hindi-jokes-api.onrender.com/jokes/1?api_key=${Hindi_Joke_API_Key}`;
    fetch(Joke_API).then(response => response.json()).then(value => {
        // console.log(value)
        hindi.innerHTML = "";
        const jokeitem = value.data[0];
        const jokeContent = jokeitem.jokeContent;
        // console.log(jokeContent)
        hindi.innerHTML = jokeContent;
    }).catch(() => {
        hindi.innerHTML = "Error while fetching jokes";
    })
}
// English Jokes
const changeenglishjoke = async () => {
    let loder = `<img src="image/loader/Ellipsis-3.8s-200px.gif" alt="loader">`
    english.innerHTML = loder;
    const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${English_Joke_API_Key}`,
            'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        english.innerHTML = "";
        joke = result[0].joke;
        english.innerHTML = joke + "😆🤣😋😉";
    } catch (error) {
        english.innerHTML = "Error while fetching jokes.", error;
    }
}