import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import CurrentSong from './components/CurrentSong/CurrentSong'
import ControlBar from './components/ControlBar/ControlBar'
import ListSong from './components/ListSong/ListSong';

function App() {
  const [listSong, setListSong] = useState([
    {
      id: 0,
      name: "Move Your Body",
      singer: "Sia",
      path: "./music/song1.mp3",
      image: "./image/img1.jpg"
    },
    {
      id: 1,
      name: "Unstoppable",
      singer: "Sia",
      path: "./music/song2.mp3",
      image: "./image/img2.jpg"
    },
    {
      id: 2,
      name: "Mask off",
      singer: "Future",
      path: "./music/song3.mp3",
      image: "./image/img3.jpg"
    },
    {
      id: 3,
      name: "My head & my Heart",
      singer: "Ava Max",
      path: "./music/song4.mp3",
      image: "./image/img4.jpg"
    },
    {
      id: 4,
      name: "Animals",
      singer: "Maroon 5",
      path: "./music/song5.mp3",
      image: "./image/img5.jpg"
    },
    {
      id: 5,
      name: "They Said",
      singer: "Binz",
      path: "./music/song6.mp3",
      image: "./image/img6.jpg"
    },
    {
      id: 6,
      name: "Wake me up",
      singer: "Avicci",
      path: "./music/song7.mp3",
      image: "./image/img7.jpg"
    },
    {
      id: 7,
      name: "Waiting for love",
      singer: "Avicci",
      path: "./music/song8.mp3",
      image: "./image/img8.jpg"
    },
    {
      id: 8,
      name: "Darkside",
      singer: "Alan Walker",
      path: "./music/song9.mp3",
      image: "./image/img9.jpg"
    },
    {
      id: 9,
      name: "Alone PT2",
      singer: "Ava Max",
      path: "./music/song10.mp3",
      image: "./image/img10.jpg"
    },
  ])
  //  
  const [currentPercent, setCurrentPercent] = useState(0)
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  //
  const [currentSong, setCurrentSong] = useState(listSong[currentIndex])
  //
  const [isPlaying, setIsPlaying] = useState(false)
  //
  const [isRepeat, setIsRepeat] = useState(false)
  //
  const [isRandom, setIsRandom] = useState(false)
  //
  const audioPlayer = useRef();
  //
  const handlePlaying = () => {
    setIsPlaying(!isPlaying);
  }
  //
  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  }
  //
  const handleRandom = () => {
    setIsRandom(!isRandom);
  }
  //
  useEffect(() => {
    setCurrentSong(listSong[currentIndex]);
    if(isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    //
    audioPlayer.current.ontimeupdate = () => {
      setCurrentPercent(Math.floor(audioPlayer.current.currentTime / audioPlayer.current.duration * 100));
    }
    //
    audioPlayer.current.onended = () => {
      if(isRepeat) {
        audioPlayer.current.play();
      }
      else if(isRandom) {
        handleRandomSong();
      } 
      else {
        handleNextSong();
      }
    }
  }, [isPlaying, currentSong, currentIndex, audioPlayer, isRepeat, isRandom])
  //
  const handleSelectSong = useCallback((id) => {
    setCurrentIndex(id);
    setIsPlaying(true);
  }, [currentIndex])
  //
  const handleNextSong = () => {
    setIsPlaying(true);
    setCurrentIndex(prevIndex => (prevIndex == listSong.length - 1) ? 0 : prevIndex + 1);
  }
  //
  const handlePrevSong = () => {
    setIsPlaying(true);
    setCurrentIndex(prevIndex => (prevIndex - 1 < 0) ? listSong.length - 1 : prevIndex - 1);
  }
  //
  const handleRandomSong = () => {
    setIsPlaying(true);
    const random = Math.floor(Math.random() * listSong.length)
    setCurrentIndex(random);
  }
  //
  const handleOnChange = useCallback((value) => {
    const seekTime = audioPlayer.current.duration / 100 * value
    audioPlayer.current.currentTime = seekTime
  })
  //
  return (
    <div className="App">
      <div className="player">
        <div className="dashboard">
          <audio ref={audioPlayer} src={currentSong.path}></audio>
          <CurrentSong currentSong={currentSong}/>
          <ControlBar
           handlePlaying={handlePlaying} 
           isPlaying={isPlaying} 
           handleNextSong={handleNextSong}
           handlePrevSong={handlePrevSong}
           currentPercent={currentPercent}
           handleOnChange={handleOnChange}
           isRepeat={isRepeat}
           isRandom={isRandom}
           handleRepeat={handleRepeat}
           handleRandom={handleRandom}
          />
          <ListSong listSong={listSong} currentSongId={currentSong.id} handleSelectSong={handleSelectSong}/>
        </div>
      </div>
    </div>
  )
}
export default App
