import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = (userInput.duration > 0)

  function handleUserInput(input, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [input]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleUserInput={handleUserInput} userInput={userInput}/>
      {inputIsValid ?
      <Results input={userInput}/>
      :
      <p className="center">Please enter a duration greater than zero</p>
    }
    </>
  );
}

export default App;
