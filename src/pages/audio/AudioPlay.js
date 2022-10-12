import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AudioPlay = () => {
  const audioRef = useRef(null);
  const [totalTime, setTotalTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (audioRef.current) return;
    const audio = new Audio();
    audio.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3';
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

  return (
    <AudioPlayer>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.play();
          }
        }}>
        재생 버튼
      </button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
          }
        }}>
        일시정지 버튼
      </button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }}>
        정지 버튼
      </button>
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
      <p>{currentTime ?? '0:0'}</p>
      <p>{totalTime ?? '0:0'}</p>
    </AudioPlayer>
  );
};

const AudioPlayer = styled.div``;

export default AudioPlay;
