## Scripts

### Palindrome
> Créer une fonction `palindrome(word)` qui vérifie si un mot est un palindrome et retourne un `boolean`. Si `word` n'est pas un string  retourner le texte `Merci de mettre une string valable`
```js
function palindrome(word) {
  if (typeof(word)!='string')
  {return"Merci de mettre une string valable"}
  for(let i=0; i<word.length;i++)
  {
      const start = word.charAt(i);
      const end = word.charAt(word.length-i-1);
      if(start!=end)
      {
          return false;
      }
  }
  return true;
}
console.log(palindrome('kayak')) // true
console.log(palindrome('noname')) // false
console.log(palindrome(1)) //Merci de mettre une string valable
```

## FindLongestWord
> Écrire une fonction `findLongestWord(sentence)` qui permet de trouver le mot le long plus d’une chaîne de caractère
```js
function findLongestWord(sentence) {
 var stc = sentence.split(" ");
 var longest = 0;
 var word = null;
 for (var i = 0; i < stc.length - 1; i++) {
  if (longest < stc[i].length) {
   longest = stc[i].length;
   word = stc[i];
  }
 }
 return word;
}
console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur")); // toujours
```

### Merge
> Créer une méthode `merge` qui prend en paramètres des objets et les fusionnent.
```js
const wu = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};
const tang = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};
const clan = {
    a: { t: 5 },
    c: 'foo',
};
const expectedResult1 = {
    "a": [{ x: 2 }, { y: 4}, { z: 3 }],
    "b": [1, 2, 3],
    "c": "foo"
}
const expectedResult2 = {
    "a": [{"z": 3}, { "t": 5 }],
    "b": [2, 3],
    "c": ["foo", "foo"],
}

const merge = (element1, element2) => {
 let fusion = { a: [], b: [], c: [] };
 if (element1.a) {
  if (element2.a) {
   fusion.a = fusion.a.concat(element1.a, element2.a);
  } else fusion.a = fusion.a.concat(element1.a);
 }
 if (element1.b) {
  if (element2.b) {
   fusion.b = fusion.b.concat(element1.b, element2.b);
  } else fusion.b = fusion.b.concat(element1.b);
 } else if (element2.b) fusion.b = fusion.b.concat(element2.b);

 if (element1.c && element2.c) {
  fusion.c = fusion.c.concat(element1.c, element2.c);
 } else if (element1.c) {
  if (Array.isArray(element1.c)) fusion.c = fusion.c.concat(element1.c);
  else fusion.c = element1.c;
 } else if (element2.c) {
  if (Array.isArray(element2.c)) fusion.c = fusion.c.concat(element2.c);
  else fusion.c = element2.c;
 }

 return fusion;
};

console.log(JSON.stringify(merge(wu, tang)) === JSON.stringify(expectedResult1)); 
console.log(JSON.stringify(merge(tang, clan)) ===  JSON.stringify(expectedResult2)); 
```

### L33t Sp34k
> Créez une fonction `leet` qui va prendre un parametre `sentence` et retourner, si c'est une string, `sentence` en remplacant les voyelles de tel que `[A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7]` **ET EN GARDANT LA CASTE**
. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function leet(word) {
 function leet(sentence) {

  const sentenceUpdated = [sentence.length];

  if (typeof(sentence) != 'string')
  {return "Merci de mettre une string valable"}

  if (sentence.length==0)
  {return "";}

  for (let i = 0; i < sentence.length; i++) {
   const letter = sentence.charAt(i);
   switch (letter) {
    case "a":
    case "A":
     sentenceUpdated[i] = 4;
     break;
    case "e":
    case "E":
     sentenceUpdated[i] = 3;
     break;
    case "i":
    case "I":
     sentenceUpdated[i] = 1;
     break;
    case "o":
    case "O":
     sentenceUpdated[i] = 0;
     break;
    case "u":
    case "U":
     sentenceUpdated[i] = '(_)';
     break;
    case "y":
    case "Y":
     sentenceUpdated[i] = '7';
     break;
    default:
     sentenceUpdated[i] = letter;
   }
  }
  return sentenceUpdated.join("");
 }
}
console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')); // B4DB4DN0TG00D - "1n 70(_)r 373s" (F34t. Ch4rl0tt3 D47 W1ls0N)
console.log(leet("")); // w
console.log(leet(1)); // Merci de mettre une string valable
```
### Prop Access
> Créez une fonction `propAccess` qui va prendre en entrer deux parametres `object` et `path`. `path` va representer le chemin jusqu'à une valeur dans l'objet `object` par exemple prenez l'objet `farm` suivant:
```js
const farm = {
    animal: {
        type: { name: 'cow' },
        color: "verte",
    }
}
```
> - Une valeur valide de `path` serai `animal.type.name`. 
> - Une valeur invalide de `path` serai `animal.color.opacity`.\
 Si la valeur de `path` est valide retourner la valeur au bout du chemin. Sinon retourner le text `"<invalidPath> does not exist"` where `<invalidPath>` jusqu'a l'attribut manquant. Si le `path` est vide renvoyer `object`
```js
 function propAccess(object, path) {

  const arrayPath = path.split('.');

  for(let i = 0; i<arrayPath.length;i++)
  {
   if(object.hasOwnProperty(arrayPath[i]))
   {
    console.log(arrayPath[i]);
    object=object[arrayPath[i]];
   }
   else {
    let newPath = "";

    for(let j=0;j<i+1;j++)
    {
     newPath = newPath + "." + arrayPath[j];
    }
    return newPath + " does not exist";
   }
  }
  return object.toString();
 }
 const farm = {
  animal: {
   type: { name: 'cow' },
   color: "verte",
   bonus: {
    sparkly: true,
    3: "No at least 7"
   }
  }
 }
 console.log(propAccess(farm, "animal.type.name")) 
 console.log(propAccess(farm, "animal.affiliation.name")) 
 console.log(propAccess(farm, "animal.bonus.3")) 

## Automate
> Créez une fonction `automate` qui va prendre en parametre un array d'objet `scripts` chaque objet sera défini de tel que
```json
{
    "function": Function,
    "toTest": Array,
    "expectedResult": Array
}
```

```js
function palindrome(word) {}

const myScripts = [
    {
        function: palindrome,
        toTest: ['kayak' , 'noname', 1],
        expectedResult: [true, false, true]
    }
];
function automate(scripts) {
 function automate(scripts) {
  for (let script of scripts) {
   for(let i = 0; i < script.toTest.length; i++) {
    script.function(script.toTest[i]) === script.expectedResult[i]
            ? console.log(`${script.function.name}, ${script.toTest[i]}, ${script.expectedResult[i]}`)
            : console.log(`${script.function.name}, ${script.toTest[i]}, '${script.function(script.toTest[i])}', ${script.expectedResult[i]}`);
   }
  }
 }
}

automate(myScripts)
// palindrome, kayak, true
// palindrome, noname, false 
// palindrome, 1, 'Merci de mettre une string valable', true
```
> Retourner le nom de la fonction, la/les valeurs tester, ainsi que le resultat et si le resultat est différent de celui attendu afficher le resultat attendu.
