import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";



function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);
  const [eaten, setEaten] = useState([]);

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        setSushis={setSushis} 
        money={money}
        setMoney={setMoney}
        setEaten={setEaten} 
      />
      <Table money={money} plates={eaten} />
    </div>
  );
}

export default App;
