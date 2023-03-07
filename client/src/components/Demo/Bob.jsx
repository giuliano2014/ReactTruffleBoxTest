import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

const Bob = () => {
  const { state } = useEth();
  const { artifact, contract } = state;
  const [value, setValue] = useState("?");
  const [greeter, setGreeter] = useState("?");

  console.log('state', state);
  console.log('state.artifact ', state.artifact );
  console.log('state', state);

  const demo =
    <>
      <Cta />
      <div className="contract-container">
        <Contract value={value} greeter={greeter} />
        <ContractBtns setValue={setValue} setGreeter={setGreeter} />
      </div>
      <Desc />
    </>;

  return (
    <div className="demo">
      <Title />
      {/* {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      } */}
      {/* {!artifact && <NoticeNoArtifact />}
      {!contract && <NoticeWrongNetwork />} */}
      {/* {artifact && contract && demo} */}
      {demo}
    </div>
  );
}

export default Bob;
