import { useEffect, useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const handleClick = value => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    checkResult();
  }, [computerChoice, userChoice]);

  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("You win");
        break;

      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("You lost");
        break;

      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
        setResult("Draw");
        break;
    }
  };

  return (
    <div>
      <h1>user choice: {userChoice}</h1>
      <h1>computer choice: {computerChoice}</h1>
      {/* <button onClick={() => handleClick("rock")}>Rock</button>
      <button onClick={() => handleClick("paper")}>Paper</button>
      <button onClick={() => handleClick("scissors")}>Scissors</button> */}
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
};

export default App;
