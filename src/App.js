import {
  HashRouter,
  // Routes,
  // Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
// import Rockets from './components/Rockets';
// import Missions from './components/Missions';
// import MyProfile from './components/MyProfile';

function App() {
  return (
    <HashRouter>
      <NavBar />
      {/* <Routes>
        <Route
          path="/"
          element={<Rockets />}
          basename="/https://mrcbq.github.io/space-travelers-capstone/"
        />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes> */}
    </HashRouter>
  );
}

export default App;
