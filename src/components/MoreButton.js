import React from "react";
import { render } from "react-dom";

function MoreButton({onRenderSushi}) {

  return <button onClick={onRenderSushi}>More sushi!</button>;
}

export default MoreButton;
