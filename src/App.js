import { Route, Routes } from 'react-router-dom';

import NavbarContainer from './components/NavbarContainer';

import About from './pages/About';
import DietList from './pages/DietList';
import Home from './pages/Home';

function App() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-white to-burnt-sienna-50'>
			<NavbarContainer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/diet-list' element={<DietList />}></Route>
			</Routes>
		</div>
	);
}

export default App;
