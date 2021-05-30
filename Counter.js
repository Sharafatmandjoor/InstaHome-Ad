import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((currentCount) => currentCount + 1);
    props.onClick();
  };
  return (
    <div className="Counter">
      <div> {count}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default Counter;
