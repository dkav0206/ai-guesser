import { useState, useEffect} from 'react'
import './App.css'
import mySound from './assets/Music/good.mp3'


//react
import { Fragment, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './template/HomeTemplate/HomeTemplate'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

const HomePage = lazy(() => { return import('./pages/HomePage/HomePage') })



function App() {
  const [audio] = useState(new Audio(mySound));
  const audioVolume : number = useSelector((state: RootState) => state.sliceAudio.audioValue)
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioVolume) audio.volume = audioVolume/10;
    isPlaying ? audio.play() : audio.pause();
    audio.loop = true
  }, [isPlaying, audioVolume]);


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='' element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
