import { useState, useEffect } from "react";

const KeypressActivity = () => {
  const [keyCount, setKeyCount] = useState(0);
  const [lastKey, setLastKey] = useState(null);

  const handleKeyPress = (event) => {
    setKeyCount(prevCount => prevCount + 1);
    setLastKey(event.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

   
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 

  return (
    <div>
      <p>You've Clicked Keyboard Buttons {keyCount} times.</p>
      <p>Last Pressed Button is {lastKey}</p>
    </div>
  );
};

export default KeypressActivity;
