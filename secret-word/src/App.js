//CSS
import './App.css';

//REACT Styles
import {useCallback, useEffect, useState} from 'react';

// palavras 
import {wordsList} from "./data/word";

// componentes 
import StartScreen from './components/startScreen';
import Game from './components/game';
import GameOver from './components/gameOver';


const stages = [ 
  { id:1, name: "start" },
  { id:2, name: "game" },
  { id:3, name: "end"},

]
function App() {
  const [ gameStage, setGameStage ] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  let qtGuesses = 3;
  const [guessedLetters,setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  



  const pickedWordAndCategory = useCallback(() => {
    // pegar uma categoria aleatória 
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pegar uma palavra aleatória 
    const word =
      words[category][
        Math.floor(Math.random() * words[category].length)
      ];

      console.log(word)

      return {word, category}
  },[words] )

//inicia o jogo 
  const startGame = useCallback( () => {
    clearLetterStates();

    //pegar letra e categoria  
   const {word,category} = pickedWordAndCategory();

   // criar um array de letras 
   let wordLetters = word.split("");
   wordLetters = wordLetters.map((l) => l.toLowerCase());


   console.log(word, category);
   console.log(wordLetters)

   // states 
   setPickedWord(word)
   setPickedCategory(category)
   setLetters(wordLetters)
   
    setGameStage(stages[1].name)
  },[pickedWordAndCategory])


  // verificar letra digitada pelo user 

  const verifyLetter = (letter) => {
    // setGameStage(stages[2].name)
    // console.log(letter)
    const normalizedLetter = letter.toLowerCase();

    // checa se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)
    ){
      return;
    }

    // colocar letra caso essa seja correta ou remover uma tentativa 
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters)=> [
        ...actualGuessedLetters,
        letter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
       setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const  clearLetterStates = ()=> {
    setGuessedLetters([]);
    setWrongLetters([])
    
  }

  //checa se todas as tentativas foram usadas
  useEffect(()=>{
    if(guesses <= 0) {
      //limpar todos os states 
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  },[guesses])

  //checar condição de vitoria
  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)];
    // condição de vitoria
    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore)=> actualScore += 100)

      // reiniciar o game com uma nova palavra 
      startGame();
    }
  },[guessedLetters, letters,startGame])

  //
  // reinicia game 
  const retry = () => {
    setScore(0)
    setGuesses(5)
     setGameStage(stages[0].name);
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      verifyLetter = {verifyLetter} 
      pickedWord = {pickedWord} 
      pickedCategory = {pickedCategory} 
      letters = {letters}
      guessedLetters = {guessedLetters}
      wrongLetters = {wrongLetters}
      guesses = {guesses}
      score = {score}
      
      />}
      {gameStage === "end" && <GameOver retry = {retry} score={score}/>}
    </div>
  );
}

export default App;
