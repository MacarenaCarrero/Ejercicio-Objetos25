const towerData = {
  levelOne: {
    vowels: [] // Vocales extraídas
  },
  levelTwo: {
    consonants: [] // Consonantes extraídas
  },
  levelThree: {
    words: [] // Palabras extraídas en orden normal
  },
  levelFour: {
    wordLengths: [] // Longitud de cada palabra
  },
  levelFive: {
    uppercasedWords: [], // Palabras en mayúsculas
    lowercasedWords: [] // Palabras en minúsculas
  },
  levelSix: {
    secretMessage: '' // Mensaje codificado usando reglas especiales
  },
  levelSeven: {
    totalLength: 0 // Suma total de la longitud de todas las palabras
  },
  levelEight: {
    reversedWords: [] // Palabras invertidas de la frase original
  },
  levelNine: {
    randomCode: '' // Código aleatorio generado en base a toda la información
  },
  levelTen: {
    finalMessage: '' // Código final calculado usando todos los niveles
  }
};

const consonants = 'bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ';
const vowels = 'AEIOUaeiou';

const extractVowels = sentence => {
  let onlyVowels = [];
  for (const word of sentence) {
    for (const letter of word) {
      if (vowels.includes(letter)) {
        onlyVowels.push(letter);
      }
    }
  }
  return onlyVowels;
};

const extractConsonants = sentence => {
  let onlyConsonants = [];
  for (const word of sentence) {
    for (const letter of word) {
      if (consonants.includes(letter)) {
        onlyConsonants.push(letter);
      }
    }
  }
  return onlyConsonants;
};

const splitWords = sentence => {
  let onlyWord = [];
  const splitSentence = sentence.split(' ');
  onlyWord.push(splitSentence);

  return onlyWord;
};

//FUNCIÓN GENÉRICA
const fillTower = sentence => {
  const vowelsExtracted = extractVowels(sentence);
  towerData.levelOne.vowels = vowelsExtracted;

  const consonantsExtracted = extractConsonants(sentence);
  towerData.levelTwo.consonants = consonantsExtracted;

  const wordsExtracted = splitWords(sentence);
  towerData.levelThree.words = wordsExtracted;

  console.log(vowelsExtracted);
  console.log(extractConsonants);
  console.log(splitWords);
};
fillTower('Frase random para testear');
console.log(towerData);
