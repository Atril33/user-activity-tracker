import { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/welcome';
import ButtonClickActivity from './components/buttonClickActivity';
import KeypressActivity from './components/keypressActivity';

function App() {
  const [welcome, setWelcome] = useState(true);
  const [clickActivity, setClickActivity] = useState(false);
  const [keypressActivity, setKeypressActivity] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
      console.log('components mounted');
    }, 3000);

    return () => clearTimeout(timer) ;
  }, []);

  useEffect(() => {
    if (!welcome) {
      setClickActivity(true);
      setKeypressActivity(true);
      console.log('Welcome did update');
    }
  }, [welcome]);


  return (
    <>
      {welcome ? <Welcome /> : null}
      {clickActivity ? <ButtonClickActivity /> : null}
      {keypressActivity ? <KeypressActivity /> : null}
      <br>
      </br>
     
    </>
  );
}

export default App;
