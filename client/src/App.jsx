import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Bob from "./components/Demo/Bob";
import Footer from "./components/Footer";
// import GreeterContainer from "./components/Demo/GreeterContainer";
import GreeterCustom from "./components/Demo/GreeterCustom";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <hr />
          <Bob />
          <hr />
          {/* <GreeterContainer />
          <hr />*/}
          <GreeterCustom />
          <hr /> 
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
