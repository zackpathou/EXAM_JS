const root = document.querySelector('#root') //equivalent a ecrire document.getElementById('root')

const clock = document.createElement('div') // const clock = <p></p>
const time = document.createElement('p')

const timezoneTime = document.createElement('p')

const timezone = document.createElement('p')
const timezoneList = ['UTC', 'Asia/Tokyo', 'America/Anchorage']
let currentTimezoneIndex = 0

// fonction qui va nous permettre de mettre du texte dans la balise <p></p>
function changeClockTime() { 
    const date = new Date()
    const hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`
    const minute = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    const second = `${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}` 
    time.textContent = `${hour}:${minute}:${second}` //<p>15:14:07</p>
    if(second % 5) {
        time.style.color = '' 
    }
    else {
        time.style.color = 'blue'
    }
}

function changeTimezoneClockTime() {
    const date = new Date()
    timezoneTime.style.color = date.getSeconds() % 5 ? 'black' : 'blue'
    const timeZone = timezoneList[currentTimezoneIndex]
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone  // reviens a ecrire timeZone: timeZone
    }
    timezoneTime.textContent = date.toLocaleString('fr-FR', options)
    timezone.textContent = timeZone 
}

function writeClocks() {
    changeClockTime()
    changeTimezoneClockTime()
}

writeClocks() // appel de la function
const intervalId = setInterval(writeClocks, 1000) // setInterval va appeler la fonction changeClockTime toute les 1000 millisecondes (1 seconde)


// BUTTON NEXT, pour changer de timezone
const next = document.createElement('button')
next.textContent = 'next'

next.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex + 1) % timezoneList.length // currentTimezoneIndez = currentTimezoneIndex + 1
    timezone.textContent = timezoneList[currentTimezoneIndex]
    changeTimezoneClockTime()
})

// BUTTON PREVIOUS, pour changer de timezone
const previous = document.createElement('button')
previous.textContent = 'previous'

previous.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex <= 0 ? timezoneList.length : currentTimezoneIndex) - 1 // currentTimezoneIndez = currentTimezoneIndex + 1
    timezone.textContent = timezoneList[currentTimezoneIndex]
    changeTimezoneClockTime()
})

// BUTTON STOP POUR ARRETER L'INTERVAL
const stop = document.createElement('button')
stop.textContent = 'stop'

stop.addEventListener('click', () => clearInterval(intervalId)) // arrete le setInterval au moment ou on va cliquer sur le button

const controlButtons = document.createElement('div')
controlButtons.append(next, previous, stop)

clock.appendChild(time)
clock.appendChild(timezone)
clock.appendChild(timezoneTime)
clock.appendChild(controlButtons)



root.appendChild(clock) // ajoute la balise <p></p> a l'interieur de la div <div id="root"></div>

