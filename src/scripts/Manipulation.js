const ucFirst = (string) => { // function ucFirst(string) { do something }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(ucFirst('hello'))

function capitalize(sentence) {
    const words = sentence.split(' ')
    for(i = 0 ; i < words.length ; ++i) {
        words[i] = ucFirst(words[i])
    }

    return words.join(' ')

}
const capitalizeExpectedResult = 'Hello World Banane'
const capitalizeValueToTest = 'hello world banane'

function capitalize2(sentence) {
    const result = sentence.split(' ') // ['string', 'string', 'string']
    // map va comme le forEach permettre de bouclé sur tout les elements de notre tableau et va nous retourner un tableau
    // contenant le retour de notre callback
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const mappedResult = result.map(element => { 
        return ucFirst(element)
    });

    return mappedResult.join(' ')

}
function capitalize3(sentence) {
    return sentence
        .split(' ')
        // ici dans le map on crée une fonction qui va appeler une autre fonction
        // a la place de detailler la fonction de callback on pourrait appeler directement 
        // .map(element => ucFirst(element)) qui peut etre factoriser en .map(ucFirst)
        .map(function(element) {
            return ucFirst(element)
        }) 
        .join(' ')
}
console.log("Capitalize", capitalize(capitalizeValueToTest) === capitalizeExpectedResult)
console.log("Capitalize2", capitalize2(capitalizeValueToTest) === capitalizeExpectedResult)
console.log("Capitalize3", capitalize3(capitalizeValueToTest) === capitalizeExpectedResult)

// =======================================================================
// CAMEL CASE
function camelCase(sentence) {
    const words = sentence.split(' ') // ['string', 'string', 'string']
    for(i = 0 ; i < words.length ; ++i) {
        const word = words[i] // word = 'string'
        words[i] = ucFirst(word) // word[i] = 'String'
    }
    return words.join('')
}
function camelCase2(sentence) {
    let result = ''
    for(i = 0 ; i < sentence.length ; ++i) {
        if(sentence[i-1] === ' ') {
            result += sentence[i].toUpperCase()
        }
        else {
            result += sentence[i]
        }
    }
    result = result.replace(/ /g, '')
    return ucFirst(result)
}

function camelCase3(sentence) {
    return capitalize(sentence) // 'Hello World'
        .split(' ') // ['Hello', 'World']
        .join('') // 'HelloWorld'
}
const camelCaseExpectedResult =  'HelloWorld'
const camelCaseValueToTest = 'hello world'

console.log("camelCase", camelCase(camelCaseValueToTest) === camelCaseExpectedResult)
console.log("camelCase2", camelCase2(camelCaseValueToTest) === camelCaseExpectedResult)
console.log("camelCase3", camelCase3(camelCaseValueToTest) === camelCaseExpectedResult)

// =======================================================================
// SNAKE CASE

function snakeCase(sentence) {
    return sentence.split(' ').join('_')
}

const snakeCaseExpectedResult =  'hello_world_ok'
const snakeCaseValueToTest = 'hello world ok'

console.log("snakeCase", snakeCase(snakeCaseValueToTest) === snakeCaseExpectedResult)
