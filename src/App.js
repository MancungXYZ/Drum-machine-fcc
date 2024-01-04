import { useEffect, useState } from 'react';
import './App.css';

const secondSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];




function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSound = (selector) => {
    const audio = document.getElementById(selector)
    console.log(audio)
    audio.play()
    setIsPlaying(selector)
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      handleSound(event.key.toUpperCase())
    })
  }, [])


  return (
    <div className="App">
      <div className="drum-machine" id='drum-machine'>
        <div id='display'>
          <div className="key-status">
            Key press : {isPlaying}
          </div>
          <div className="drum-pads">
          {secondSoundsGroup.map((item, index) => (
            <div className="drum-pad" key={index} id={item.url} onClick={() => {
              handleSound(item.key)
            }}>
              {item.key}
              <audio className='clip' id={item.key} src={item.url}></audio>
            </div>
          ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
