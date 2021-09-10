// function multiplyByFour(x) {
//     return x * 4
// }

// let result = 5
// console.log(result, 'un')

// function changeResultValue() { // Cette fonction va changer la valeur de la variable result et faire un console.log de cette valeur 
//     result = multiplyByFour(9)
//     console.log(result, 'deux')
// }
// const nombreAleatoire = Math.floor(Math.random() * 10) // nombre aleatoire entre 0 et 9

// setTimeout(changeResultValue, nombreAleatoire * 1000) // Simule une requete : une operation qui a un temps d'execution random au bout d'un nombre aleatoire de seconde

// console.log(result, 'trois')

// if(result === 36 ) {
//     console.log("BRAVO C'EST BON")
// }

// setTimeout(() => {
//     if(result === 36 ) {
//         console.log("ON A ATTENDU ET BRAVO C'EST BON")
//     }
// }, 3 * 1000) // on essaie d'attendre la fin de l'execution de la "requete"

// Si on se retrouve dans une situation ou on ne sait pas combien de temps l'operation va prendre
// on est bloqué, on peut avoir un resultat different a chaque execution du code 

const myPromise = new Promise(
        function(resolve, reject) {
            if(Math.floor(Math.random * 2) === 1 ) { // Est egal a true or false de maniere aleatoire
                setTimeout(() => {
                    resolve('Hello, from promise') // Va activer les .then et ignorer le .catch
                }, 2 * 1000)
            }
            else {
                reject('oh no an error') // Va activer le .catch et ignorer les .then
            }
        }
    )
console.log(myPromise);
myPromise
    .then(response => {
        const message =  `Hello from the then function, message:  ${response}`
        console.log(message)
        return message // va etre utiliser par le .then qui suit 
    })
    .then(response => {
        const finalMessage = `Hello from the other then, message: ${response}`
        return finalMessage
    })
    .catch(error => {
        console.log(`Hello from the catch, message: ${error}`)
    })

// ############################################################################################
// exemple interactif
// ############################################################################################

const root = document.querySelector("#root");

const testPromise = () => new Promise((testPromiseResolve, testPromiseReject) => {
  console.log("1");

  new Promise((resolve) => {
    console.log("2");
    setTimeout(() => { 
        resolve("3");
    }, Math.random() * 2000 + 1000);
  })
  .then(res => testPromiseResolve(res) )
  .catch(err => testPromiseReject(`erreur : ${err}`) );

  console.log("4");

})
.then(testPromiseResponse => console.log(testPromiseResponse))
.catch(testPromiseError => console.log(testPromiseError));

const btn = document.createElement("button");
btn.textContent = "Lancer la fonction";
btn.style.cursor = "pointer";
btn.addEventListener("click", () => {
  testPromise();
});

root.appendChild(btn);