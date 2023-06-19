import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/Mission" element={<Missions missions={Missions} />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/" element={<Rockets rockets={Rockets} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
