import { useState } from "react";

const ButtonClickActivity = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <p>You've Clicked Button {clickCount} Times</p>
    </>
  );
};

export default ButtonClickActivity;
