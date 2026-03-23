import classes from '../styles/Voice.module.css';
import {useState, useRef} from 'react';
function VoiceRecorder(){
  const [audioSrc, setSrc] = useState('');
  const [isRecording, setRecording] = useState(false);
  const [isRecordingFinish, setRecordingFinish] = useState(false);
  const stopRecordingBtn = useRef(null);
  const audioRef = useRef(null);
  function recordAudio(){
    const chunks = [];
    navigator.mediaDevices.getUserMedia({audio:true, video:false})
    .then((stream)=>{
      const stopRecordingElm = stopRecordingBtn.current;
      setRecording(true);
      setRecordingFinish(false);
      const record = new MediaRecorder(stream);
      record.start();
      record.ondataavailable = (e)=>{
        chunks.push(e.data);
      };
      stopRecordingElm.onclick = ()=>{
        record.stop();
        setRecording(false);
        setRecordingFinish(true);
      }
      record.onstop = ()=>{
        const blob = new Blob(chunks, {type: "audio/mp3"});
        const url = window.URL.createObjectURL(blob);
        setSrc(url);
      }
    })
    .catch((err)=>{console.log('A Error' + err)});
  };
  return(
    <div className={`${classes.container}`}>
      <h1 className={`${classes.title}`}>Voice Recorder</h1>
      <audio ref={audioRef} src={audioSrc} controls></audio>
      <div className={`${classes.btns}`}>
      <button 
      className={`${classes.record_btn} 
      ${isRecording ? classes.disabled : ''}`}
      disabled={isRecording}
      onClick={recordAudio}
      >Start Recording</button>
      <button 
      className={`${classes.record_btn} ${isRecording ? '' : classes.disabled}`}
      disabled={!isRecording}
      ref={stopRecordingBtn}
      >Stop Recording</button>
      </div>
      <a download="audio_recording" href={audioSrc} className={`${classes.link} ${isRecordingFinish ? '' : classes.hide}`}>Download</a>
    </div>
  );
}
export default VoiceRecorder;