import React from "react";

function Image({ number }) {
  return <img src={`./dice-${number}.png `} />;
}

export default Image;
