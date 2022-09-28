import { Route, Routes } from 'react-router-dom';

import NavbarContainer from './components/NavbarContainer';

import Home from './pages/Home';
import About from './pages/About';
import DietList from './pages/DietList';

function App() {
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/diet-list' element={<DietList />}></Route>
      </Routes>
    </>
  );
}

export default App;
