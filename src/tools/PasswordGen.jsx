import classes from '../styles/PasswordGen.module.css';
import {PasswordGenerator} from '../data/password-generator.js';
import {useRef, useState} from 'react';
function PasswordGen() {
  const upperCaseRef = useRef(null);
  const lowerCaseRef = useRef(null);
  const numbersRef = useRef(null);
  const symbolsRef = useRef(null);
  const inputLengthRef = useRef(null);
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState('');
  const [isCopied, setCopied] = useState(false);
  function copyPassword(){
    navigator.clipboard.writeText(password);
    setCopied(true);
    window.clearTimeout();
    let timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  function generatePassword(){
    const passwordGenerator = new PasswordGenerator({
    upperCase:upperCaseRef.current.checked,
    lowerCase:lowerCaseRef.current.checked,
    symbols:symbolsRef.current.checked,
    numbers:numbersRef.current.checked
  }, length);
  setPassword(passwordGenerator.generate());
  }
  function changeLength(){
    const inputLengthElm = inputLengthRef.current;
    setLength(inputLengthElm.value);
  }
  return(
    <div className={`${classes.container}`}>
      <h1>Password Generator</h1>
      <div className={classes.options}>
        <input 
        type="text" 
        className={classes.pass_input} 
        placeholder="Password"
        readOnly
        value={password}
        />
        <button 
        className={classes.copy_btn}
        onClick={copyPassword}
        >{isCopied ? 'Copied' : 'Copy'}</button>
      </div>
      <div className={classes.choices}>
        <label htmlFor="upper" className={classes.choice}>
          UpperCase
          <input ref={upperCaseRef} type="checkbox" className={classes.checkmark}/>
        </label>
        <label htmlFor="upper" className={classes.choice}>
          LowerCase
          <input ref={lowerCaseRef} type="checkbox" className={classes.checkmark}/>
        </label>
        <label htmlFor="upper" className={classes.choice}>
          Symbols
          <input ref={symbolsRef} type="checkbox" className={classes.checkmark}/>
        </label>
        <label htmlFor="upper" className={classes.choice}>
          Numbers
          <input ref={numbersRef} type="checkbox" className={classes.checkmark}/>
        </label>
      </div>
      <div className={classes.length_container}>
        <input 
        type="range"  
        className={classes.pass_length}
        onChange={changeLength}
        ref={inputLengthRef}
        value={length}
        />
        <p>Length:{length}</p>
      </div>
        <hr />
        <button 
        className={classes.generate_btn}
        onClick={generatePassword}
        >Generate</button>
      </div>
    );

}
export default PasswordGen;