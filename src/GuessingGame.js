import React,{useState} from 'react';

const GuessingGame =()=>{
    const [secretNumber]= useState(Math.floor(Math.random()*100)+1);
    const [guess,setGuess]=useState('');
    const [message,setMessage]=useState('');
    const [attempts,setAttempts]=useState(0);

    const handleChange=(e)=>{
        setGuess(e.target.value);
    };
    const handleGuess=()=>{
        const userGuess = parseInt(guess, 10);
        setAttempts(attempts + 1);
        if (userGuess < secretNumber) {
            setMessage('Guesses Number is low! Try again.');
          } else if (userGuess > secretNumber) {
            setMessage('Guesses Number is high! Try again.');
          } else {
            setMessage(`Congratulations! You've guessed the number ${secretNumber} in ${attempts + 1} attempts.`);
          }
    };
    return(
        <div>
            <h1>Guessing Game</h1>
            <p>Guess the number (between 1 and 100):</p>
            <input type="number" value={guess} onChange={handleChange} />
            <button onClick={handleGuess}>Guess</button>
            <p>{message}</p>
        </div>
    );
};
export default GuessingGame;
