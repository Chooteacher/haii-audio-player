import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AudioPlayerContainer } from './AudioPlayer.styled';
import AudioDownload from './components/AudioDownload';
import AudioPlay from './components/AudioPlay';

const AudioPlayer = () => {
  const navigate = useNavigate();
  const [audioSrc, setAudioSrc] = useState();

  return (
    <AudioPlayerContainer>
      <div className='audioTextBox'>
        <span className='audioText'>Audio Player</span>
        <div className='audioContentBox'>
          <AudioDownload audioSrc={audioSrc} />
          <div className='albumImgBox'>
            <iframe src='https://giphy.com/embed/hs7piNujovlLgMsHWm' title='player image'></iframe>
            <AudioPlay audioSrc={audioSrc} setAudioSrc={setAudioSrc} />
          </div>
        </div>
      </div>
      <div className='audioTitle'>
        <span
          onClick={() => {
            navigate('/');
          }}>
          Go Record
        </span>
      </div>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
