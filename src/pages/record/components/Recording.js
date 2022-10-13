import { useState, useEffect } from 'react';
import { HiOutlineMicrophone } from 'react-icons/hi';

let countTime;
const Recording = ({ recording, limitTime, handleRecording }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    countTime = setInterval(() => {
      setTime((prev) => (prev = prev + 1));
    }, 1000);
    return () => clearInterval(countTime);
  }, [recording]);

  useEffect(() => {
    if (time >= limitTime) {
      clearInterval(countTime);
      handleRecording();
    }
  }, [time]);

  return (
    <>
      <div className='bodyContainer'>
        <HiOutlineMicrophone size='10rem' />
        <p>녹음 중입니다.</p>
      </div>
      <div className='countContainer'>
        {time < 10
          ? `00:0${time}`
          : time < 60
          ? `00:${time}`
          : time % 60 < 10
          ? `0${Math.floor(time / 60)}:0${time % 60}`
          : `0${Math.floor(time / 60)}:${time % 60}`}
      </div>
    </>
  );
};

export default Recording;
