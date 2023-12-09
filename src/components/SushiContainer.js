import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, setSushis, money, setMoney, setEaten}) {
  const [sushiIndex, setSushiIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(response => response.json())
    .then(data => setSushis(data))
  }, [])

  function renderMoreSushi() {
    setSushiIndex(prevIndex => prevIndex + 4)
  }

  return (
    <div className="belt">
      {sushis.slice(sushiIndex, sushiIndex + 4).map(sushi => (
        <Sushi 
          sushi={sushi} 
          key={sushi.id} 
          money={money} 
          setMoney={setMoney} 
          setEaten={setEaten}
        />))}
      <MoreButton sushis={sushis} onRenderSushi={renderMoreSushi} />
    </div>
  );
}

export default SushiContainer;
