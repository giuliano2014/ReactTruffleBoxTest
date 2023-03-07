import { useState } from "react";

const GreeterBtns = ({ setValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
      setInputValue(e.target.value);
  };

  const read = async () => {
    setValue(inputValue);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
  };

  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default GreeterBtns;
