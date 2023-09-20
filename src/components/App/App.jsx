import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Car from '../Car/Car';
import SavedCar from '../SavedCar/SavedCar';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/car" element={<Car />} />
        <Route path="/saved-car" element={<SavedCar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
