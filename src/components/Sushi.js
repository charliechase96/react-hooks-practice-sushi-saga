import React, {useState} from "react";


function Sushi({sushi, money, setMoney, setEaten}) {
  const [isEaten, setIsEaten] = useState(false);

  function eatSushi() {
    if (!isEaten && money >= sushi.price) {
      setIsEaten(true);
      setMoney(money - sushi.price);
      setEaten(eaten => [...eaten, sushi.id]);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
