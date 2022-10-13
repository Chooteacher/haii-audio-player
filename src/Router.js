import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordMain from './pages/record/RecordMain';
import AudioPlayer from './pages/audio/AudioPlayer';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter basename='haii-audio-player-8team'>
        <Routes>
          <Route path='/' element={<RecordMain />} />
          <Route path='/audio' element={<AudioPlayer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
