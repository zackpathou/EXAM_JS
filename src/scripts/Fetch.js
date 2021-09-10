const meteo = document.createElement('p')

const apiKey = '154af27bbd5e70a202fde7101ff4d765'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=${apiKey}`)
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(json => {
//         console.log(json)
//         meteo.textContent = json.weather[0].description
// })

async function getWeather(city) { // maintenant getWeather va nous retourner une promise
    let weather // cree une variable qu'on va modifier plus tard
    console.log('avant le .json()', weather)
    try {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) // await va attendre la fin de l'execution de la requete qui est une promise
        const response = await request.json() // await va attendre la fin de l'execution de .json() qui est une promise aussi
        // const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => response.json()) 
        weather = response.weather[0].description // on va chercher la description dans l'object a la position 0 du tableau weather
    }
    catch (error) { // si on a une erreur dans le try on va rentrer ici
        console.log(error)
        weather = 'No weather!!'
    }
    console.log('apres le .json()', weather)
    meteo.textContent = weather
    return weather
}
const temps = getWeather('reims') // getWeather a cause du async/await nous retourne une promise

const btn = document.createElement("button");
btn.textContent = "Lancer la fonction";
btn.style.cursor = "pointer";

root.appendChild(meteo)
root.appendChild(btn)

