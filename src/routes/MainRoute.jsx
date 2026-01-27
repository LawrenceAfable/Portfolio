import {Route, Routes} from 'react-router-dom';

// Pages
import MainPage from '../pages/MainPage';

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}