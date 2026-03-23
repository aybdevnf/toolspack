import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './Home.jsx';
import VoiceRecorder from './tools/VoiceRecorder';
import PasswordGen from './tools/PasswordGen';
import TodoList from './tools/TodoList';
import NumberGen from './tools/NumberGen';
import ColorPicker from './tools/ColorPicker';
import Encoder from './tools/Encoder';
import {BrowserRouter, Routes, Route} from 'react-router';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/VoiceRecorder' element={<VoiceRecorder />}/>
      <Route path='/PasswordGenerator' element={<PasswordGen/>} />
      <Route path='/TodoList' element={<TodoList />} />
      <Route path='/NumberGenerator' element={<NumberGen />} />
      <Route path='/ColorPicker' element={<ColorPicker />} />
      <Route path='/Encoder' element={<Encoder />}/>
    </Routes>
  </StrictMode>
</BrowserRouter>
)
