import { useState } from "react";

const GreeterCustom = () => {
  const [greet, setGreet] = useState("");
  const [greetInput, setGreetInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreet(greetInput);
  };

  const handleInputChange = (event) => {
    setGreetInput(event.target.value);
    };

  return (
    <div>
      <h2>Greeter</h2>
      <p>Lorem ipsum</p>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="greet">Say a way of greeting</label>
        <input id="greet" type="text" value={greetInput} onChange={handleInputChange} />
        <button>Set greet</button>
      </form>
      <p>This is your way of greeting : {greet || "You haven't said it yet"}</p>
    </div>
  );
}

export default GreeterCustom;
