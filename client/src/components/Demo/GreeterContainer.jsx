import { useState } from "react";
import Greeter from "./Greeter";
import GreeterBtns from "./GreeterBtns";

const GreeterContainer = () => {
  const [value, setValue] = useState("?");

  return (
    <>
      <h2>Greeter</h2>
      <p>Lorem ipsum...</p>
      <div className="greeter-container">
        <Greeter value={value} />
        <GreeterBtns setValue={setValue} />
      </div>
    </>
  );
}

export default GreeterContainer;
