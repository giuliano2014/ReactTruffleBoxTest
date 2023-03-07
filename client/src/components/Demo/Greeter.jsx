import { useRef, useEffect } from "react";

const Greeter = ({ value }) => {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`contract Greeter {
  string value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

  function read() public view returns (string memory) {
    return value;
  }

  function write(string newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}

export default Greeter;
