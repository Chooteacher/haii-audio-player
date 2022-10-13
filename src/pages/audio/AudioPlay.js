import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';

const AudioPlay = ({ setAudioSrc }) => {
  const audioRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [totalTime, setTotalTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [percent, setPercent] = useState(0);
  const [playToggle, setPlayToggle] = useState(true);
  const [repeatToggle, setRepeatToggle] = useState(true);

  useEffect(() => {
    if (audioRef.current) return;
    const audio = new Audio();
    audio.src = '/data/dreams.mp3';
    setAudioSrc(audio.src);
    audioRef.current = audio;

    audioRef.current.addEventListener('loadedmetadata', () => {
      const duration = audio.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const time = `${minutes}:${seconds}`;
      // audio 총 재생시간
      setTotalTime(time);
    });

    audioRef.current.addEventListener('timeupdate', () => {
      // 현재 시간을 분과 초로 보기
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      const time = `${minutes}:${seconds}`;
      // audio의 현재 재생시간
      setCurrentTime(time);
      setPercent((audio.currentTime / audio.duration) * 100);
    });
  }, []);

  useEffect(() => {
    if (wavesurferRef.current) return;
    const options = formWaveSurferOptions(audioRef.current);
    wavesurferRef.current = WaveSurfer.create(options);
    wavesurferRef.current.load('/data/dreams.mp3');
  }, []);

  const formWaveSurferOptions = () => ({
    container: '#waveform',
    waveColor: '#D7D6FF',
    progressColor: '#6A6AFE',
    cursorColor: '#5092CD',
    barWidth: 2,
    barRadius: 3,
    responsive: true,
    height: 70,
    normalize: true,
    partialRender: true,
  });

  return (
    <AudioPlayer>
      <div id='waveform'></div>
      <div className='btnBox'>
        {playToggle ? (
          <button
            className='contentBtn'
            onClick={() => {
              if (audioRef.current) {
                setPlayToggle(!playToggle);
                audioRef.current.play();
                wavesurferRef.current.play();
              }
            }}>
            <img src='/images/play.png'></img>
          </button>
        ) : (
          <button
            className='contentBtn'
            onClick={() => {
              if (audioRef.current) {
                setPlayToggle(!playToggle);
                audioRef.current.pause();
                wavesurferRef.current.pause();
              }
            }}>
            <img src='/images/pause.png'></img>
          </button>
        )}
        <button
          className='contentBtn'
          onClick={() => {
            if (audioRef.current) {
              setPlayToggle(true);
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              wavesurferRef.current.stop();
            }
          }}>
          <img src='/images/stop.png' className='stopIcon'></img>
        </button>
        {repeatToggle ? (
          <button
            className='contentBtn'
            onClick={() => {
              setRepeatToggle(!repeatToggle);
            }}>
            <img src='/images/again.png' className='repeatToggle'></img>
          </button>
        ) : (
          <button
            className='contentBtn'
            onClick={() => {
              setRepeatToggle(!repeatToggle);
            }}>
            <img src='/images/repeat.png' className='repeatToggle'></img>
          </button>
        )}
        <button className='contentBtn'>
          <img src='/images/sound.png' className='soundIcon'></img>
        </button>
      </div>
      <div className='inputBox'>
        <p className='currentTime'>{currentTime ?? '0:0'}</p>
        <p className='totalTime'>{totalTime ?? '0:0'}</p>
        <input
          type='range'
          min='0'
          max='100'
          value={percent}
          onChange={(e) => {
            const percent = e.target.value;
            const audio = audioRef.current;
            audio.currentTime = (audio.duration / 100) * percent;
            setPercent(percent);
          }}
        />
      </div>
    </AudioPlayer>
  );
};

const AudioPlayer = styled.div`
  .btnBox {
    .contentBtn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 0;

      img {
        width: 2rem;
      }

      .stopIcon {
        margin-left: 0.188rem;
      }

      .repeatToggle {
        width: 1.9rem;
      }

      .soundIcon {
        margin-left: 1.5rem;
      }
    }
  }

  .inputBox {
    margin-left: 0.25rem;

    input {
      width: 90%;
      cursor: pointer;
    }

    .currentTime {
      width: 50%;
      color: #6b6bfe;
      font-weight: 600;
      display: inline-block;
    }

    .totalTime {
      width: 40%;
      color: #6b6bfe;
      font-weight: 600;
      text-align: right;
      display: inline-block;
    }
  }
`;

export default AudioPlay;
