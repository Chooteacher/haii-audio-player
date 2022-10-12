import { AiOutlineSmile } from 'react-icons/ai';

const Starting = ({ setLimitTime }) => {
  const handleSelectTime = (e) => {
    e.preventDefault();
    setLimitTime(e.target.value);
  };
  return (
    <>
      <div className='bodyContainer'>
        <AiOutlineSmile size='10rem' />
        <p>시간을 설정하고 녹음을 시작하세요.</p>
      </div>
      <form className='formContainer'>
        <p className='title'>녹음 최대 시간</p>
        <select name='time' id='time' onChange={handleSelectTime}>
          <option value='10'>10초</option>
          <option value='30'>30초</option>
          <option value='60'>1분</option>
          <option value='180'>3분</option>
          <option value='300'>5분</option>
        </select>
      </form>
    </>
  );
};

export default Starting;
