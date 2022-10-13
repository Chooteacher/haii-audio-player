import Starting from './components/Starting';
import Recording from './components/Recording';
import { useState } from 'react';
import { Wrap } from './RecordMain.styled';
import { Link } from 'react-router-dom';

const RecordMain = () => {
  const [recording, setRecording] = useState(false);
  const [limitTime, setLimitTime] = useState(11);
  const [audioUrl, setAudioUrl] = useState();
  const [mediaRecorder, setMediaRecorder] = useState();
  const [, setStream] = useState('');

  const handleRecording = () => {
    setRecording((prev) => !prev);
    getAudio();
  };

  const getAudio = () => {
    let chunks = [];

    try {
      if (!recording) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
          const mediaRecord = new MediaRecorder(stream);
          mediaRecord.start();
          setStream(stream);
          setMediaRecorder(mediaRecord);
        });
      } else {
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = (e) => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          setAudioUrl(window.URL.createObjectURL(blob));
        };

        mediaRecorder.stop();
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <Wrap>
      <div className='mainContainer'>
        <div className='headContainer'>
          <h1>음성녹음</h1>
        </div>
        {recording ? (
          <Recording recording={recording} limitTime={limitTime} handleRecording={handleRecording} />
        ) : (
          <Starting setLimitTime={setLimitTime} />
        )}
        <div className='btnContaier'>
          <button className='btn' onClick={handleRecording}>
            {recording ? '녹음 종료' : '녹음 시작'}
          </button>
          {audioUrl && !recording && (
            <button className='btn listenBtn'>
              <a target='_blanck' href={audioUrl}>
                들으러가기
              </a>
            </button>
          )}
          <Link className='goToAudio' to='/audio'>
            Go Player
          </Link>
        </div>
      </div>
    </Wrap>
  );
};

export default RecordMain;
