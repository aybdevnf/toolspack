import classes from '../styles/Picker.module.css';
import {useState, useRef} from 'react';
function ColorPicker(){
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const copyRef = useRef(null);
  function hexToRgb(hex){
    const value = parseInt(hex.replace('#', ''), 16);
    const r = (value >> 16) & 255
    const g = (value >> 8) & 255
    const b = value & 255
    setRgbColor(`${r}, ${g}, ${b}`);
  }
  function copyText(text){
    navigator.clipboard.writeText(text);
    const copyElm = copyRef.current;
    copyElm.textContent = 'Copied !';
    window.clearTimeout();
    let timeout = setTimeout(() => {
      copyElm.textContent = 'Click To Copy';
    }, 1000);
  }
  return(
    <div className={classes.container}>
      <div className={classes.colors}>
        <div className={classes.color}>
          <span 
          className={classes.value}
          onClick={()=>{copyText(hexColor)}}
          >Hex:{hexColor}</span>
        </div>
        <div className={classes.color}>
          <span 
          className={classes.value}
          onClick={()=>{copyText(`(${rgbColor})`)}}
          >RGB:({rgbColor})</span>
        </div>
      </div>
      <div>
        <input 
        type="color" 
        className={classes.color_input}
        onChange={(e)=>{setHexColor(e.target.value); hexToRgb(hexColor)}}
        />
      </div>
      <span ref={copyRef}>Click To copy</span>
    </div>
  );
}
export default ColorPicker;