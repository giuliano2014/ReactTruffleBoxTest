import { useRef, useEffect, useState } from "react";

import useEth from "../../contexts/EthContext/useEth";

function Contract({ value, greeter }) {
  const spanEle = useRef(null);
  const greeterElement = useRef(null);
  const [eventValue, setEventValue] = useState("");
  const [oldEvents, setOldEvents] = useState();

  const { state: { contract } } = useEth();

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  useEffect(() => {
    (async function () {
      let oldEvents= await contract.getPastEvents('ValueChanged', {
        fromBlock: 0,
        toBlock: 'latest'
      });
      let oldies=[];

      oldEvents.forEach(event => {
          console.log('event', event);
          oldies.push(event.returnValues.newValue);
      });

      setOldEvents(oldies);

      await contract.events.ValueChanged({fromBlock:"earliest"})
        .on('data', event => {
          let lesevents = event.returnValues.newValue;
          setEventValue(lesevents);
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract]);

  return (
    <code>
      {`contract SimpleStorage {
  uint256 value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;
  string greeter = `}

      <span className="secondary-color" ref={greeterElement}>
        <strong>{greeter}</strong>
      </span>

      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}
  Events arriving: `} {eventValue} {`
 
  Old events: `} {oldEvents}
    </code>
  );
}

export default Contract;
