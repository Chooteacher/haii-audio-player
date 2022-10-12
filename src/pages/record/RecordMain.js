import Starting from './components/Starting';
import Recording from './components/Recording';
import { useState } from 'react';
import { Wrap } from './RecordMain.styled';

const RecordMain = () => {
  const [recording, setRecording] = useState(false);
  const [limitTime, setLimitTime] = useState(10);
  const handleRecording = () => {
    setRecording((prev) => !prev);
  };

  return (
    <Wrap>
      <div className='mainContainer'>
        <div className='headContainer'>
          <h1>음성녹음</h1>
        </div>
        {recording ? (
          <Recording recording={recording} limitTime={limitTime} setRecording={setRecording} />
        ) : (
          <Starting setLimitTime={setLimitTime} />
        )}
        <div className='btnContaier'>
          <button className='startBtn' onClick={handleRecording}>
            {recording ? '녹음 종료' : '녹음 시작'}
          </button>
        </div>
      </div>
    </Wrap>
  );
};

export default RecordMain;
