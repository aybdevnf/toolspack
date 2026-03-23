import classes from '../styles/Encoder.module.css';
import {useRef, useState, useEffect} from 'react';
function Encoder(){
  const inputArea = useRef(null);
  const copyRef = useRef(null)
  const [data, setData] = useState('');
  useEffect(()=>{
    document.body.classList.add('encode_page');
    return ()=>{
      document.body.classList.remove('encode_page');
    }
  }, [])
  function encode(text){
    return btoa(text);
  } 
  function decode(text){
    return atob(text);
  }
  function copyText(){
    const copyElm = copyRef.current;
    copyElm.textContent = "Copied";
    window.clearTimeout();
    setTimeout(() => {
      copyElm.textContent = "Copy";
    }, 1000);
    navigator.clipboard.writeText(data);
  }
  return(
   <div className={classes.container}>
    <div className={classes.text_area}>
      <span>Input:</span>
      <textarea 
      ref={inputArea}
      className={classes.input_area}
      placeholder="Enter Your Text Here"
      ></textarea>
    </div>
    <div className={classes.text_area}>
      <span>Output:</span>
      <textarea 
      value={data}
      readOnly
      className={classes.output_area}
      placeholder="The Output"
      >
      </textarea>
        <img 
        className={classes.copy_btn} 
        src="./copy.png" alt="copy"
        onClick={copyText}
        />
        <div 
        className={classes.tool_tip}
        ref={copyRef}
        >Copy</div>
    </div>
    <div className={classes.choices}>
      <button onClick={()=>{setData(encode(inputArea.current.value))}} className={classes.choice}>Encode</button>
      <button onClick={()=>{setData(decode(inputArea.current.value))}} className={classes.choice}>Decode</button>
    </div>
   </div>
  );
}
export default Encoder