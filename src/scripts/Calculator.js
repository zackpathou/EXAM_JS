function ucFirst(string) {
    // do something
    const firstChar = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    console.log(firstChar)
    
    return firstChar + rest;
}
const string1 = 'ceci est la string 1';
const string2 = "et la la string 2";
const templateString = `TEMPLATE STRING`;

ucFirst(string1);

const title = document.createElement('h1') // create H1
title.textContent = 'Calculator 1'; // set text as Hello world
const otherTitle = document.createElement('h1') // create H1
otherTitle.textContent = 'Calculator 2';

const root =  document.querySelector('#root')
//=============================================================
// FIRST CALCULATOR
root.appendChild(title)
const calculator = document.createElement('div')
const screen = document.createElement('div')

calculator.appendChild(screen)

const del = document.createElement('button');
del.textContent = 'C'
const plus = document.createElement('button');
plus.textContent = '+'
const substract = document.createElement('button');
substract.textContent = '-'
const time = document.createElement('button');
time.textContent = 'x'
const divide = document.createElement('button');
divide.textContent = '/'
const equal = document.createElement('button');
equal.textContent = '='

calculator.appendChild(del);
calculator.appendChild(plus);
calculator.appendChild(substract);
calculator.appendChild(time);

calculator.appendChild(divide);
for( let i = 0 ; i<=9 ; ++i ) {
    const number = document.createElement('button')
    number.textContent = i;
    calculator.appendChild(number);
}
root.appendChild(calculator)
//=============================================================
//=============================================================
// SECOND CALCULATOR
root.appendChild(otherTitle)

const otherCalculator = document.createElement('div')
otherCalculator.appendChild(screen)


// const numbers = [...Array(10)] is equal to an array of 10 empty elements
// const operator = ['+', '-', '*', '/', 'C', '=', '%']

// numbers.forEach((_, key)=> {
//     const element = document.createElement('div')
//     element.textContent = key
//     otherCalculator.appendChild(element);
// })

// operators.forEach(value => {
//     const element = document.createElement('div')
//     element.textContent = value 
//     otherCalculator.appendChild(element);
// })

const calculatorElements = [...Array(10), '+', '-', '*', '/', 'C', '=', '%']

calculatorElements.forEach((value, key) => 
    {
        const element = document.createElement('button')
        const buttonValue = typeof value === 'string' ? value : key

        element.setAttribute('value', buttonValue)
        
        element.addEventListener('click', event => {
            switch(event.target.value) {
                case 'C':
                    screen.textContent = ''
                    break;
                case '=':
                    screen.textContent = eval(String(screen.textContent))
                    break;
                default:
                    screen.textContent += event.target.value
            }
        })

        element.textContent = buttonValue
        
        otherCalculator.appendChild(element);
    }
)

root.appendChild(otherCalculator)
//=============================================================