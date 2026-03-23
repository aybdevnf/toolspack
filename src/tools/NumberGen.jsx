import classes from '../styles/Number.module.css';
import {useState, useRef} from 'react';
function NumberGen(){
  const [randomNumber, setRandomNumber] = useState(0);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  function generateRandom(){
    const fromValue = Number(fromRef.current.value);
    const toValue = Number(toRef.current.value);
    const random = Math.floor(Math.random() * (toValue - fromValue + 1))+ fromValue
    setRandomNumber(random);
  }
  return(
    <div className={classes.container}>
      <h1>Number Generator</h1>
      <div className={classes.inputs}>
          <input 
          type="number" 
          className={classes.from} 
          ref={fromRef}
          placeholder="0"
          /> 
          <input 
          type="number" 
          className={classes.to} 
          ref={toRef}
          placeholder="100"
          />
      </div>
      <button 
      className={classes.generate_btn}
      onClick={generateRandom}
      >Generate</button>
      <p>{randomNumber}</p>
    </div>
  );
}
export default NumberGen;