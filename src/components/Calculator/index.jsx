import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import heightIcon from '../../assets/height-icon-64.png';
import idendityIcon from '../../assets/name-icon-64.png';
import weightIcon from '../../assets/weight-icon-64.png';
import BmiModal from '../BmiModal';

import { formValidationSchema } from './validation';

function Calculator() {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [isModelOpen, setIsModelOpen] = useState(false);
	const [calculatedBmi, setCalculatedBmi] = useState(0);

	useEffect(() => {
		checkLocalStorage();
	}, []);

	const addLocalStorage = (name, weight, height) => {
		localStorage.setItem('name', name);
		localStorage.setItem('weight', weight);
		localStorage.setItem('height', height);
	};

	const checkLocalStorage = () => {
		if (
			localStorage.getItem('name') === null ||
			localStorage.getItem('weight') === null ||
			localStorage.getItem('height') === null
		) {
			return;
		}

		setName(localStorage.getItem('name'));
		setWeight(localStorage.getItem('weight'));
		setHeight(localStorage.getItem('height'));
	};

	const handleHesaplaBtn = () => {
		const { error } = formValidationSchema.validate({
			name,
			weight,
			height,
		});

		if (error) {
			alert(error.details[0].message);
			return;
		}

		let calculatedHeight = height / 100;
		setCalculatedBmi((weight / (calculatedHeight * calculatedHeight)).toFixed(2));

		addLocalStorage(name, weight, height);
		setIsModelOpen(true);
	};

	const handleCloseModalBtn = () => {
		setIsModelOpen(false);
	};

	const handleDietListBtn = () => {
		navigate('/diet-list');
	};

	return (
		<>
			{isModelOpen && (
				<BmiModal
					handleCloseModalBtn={handleCloseModalBtn}
					handleDietListBtn={handleDietListBtn}
					label={name}
					value={calculatedBmi}
				/>
			)}
			<div className='container mt-10 mx-auto  px-2 py-2.5 space-y-6 md:mt-36'>
				<div className='flex items-center justify-center'>
					<label htmlFor='name' className='block mr-3 text-sm font-medium text-gray-700 '>
						<img src={idendityIcon} width={'48px'} height={'48px'} alt='name' />
					</label>
					<div className='relative mt-1 rounded-lg shadow-sm'>
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-burnt-sienna-200 focus:ring-burnt-sienna-200 sm:text-xl'
							onChange={(e) => setName(e.target.value)}
							placeholder='??sminizi giriniz..'
						/>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<label htmlFor='weight' className='block mr-3 text-sm font-medium'>
						<img src={weightIcon} width={'48px'} height={'48px'} alt='weight' />
					</label>
					<div className='relative mt-1 rounded-lg shadow-sm'>
						<input
							type='text'
							name='weight'
							id='weight'
							value={weight}
							className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-burnt-sienna-200 focus:ring-burnt-sienna-200 sm:text-xl'
							onChange={(e) => setWeight(e.target.value)}
							placeholder='Kilonuzu giriniz..'
						/>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<label htmlFor='height' className='block mr-3 text-sm font-medium text-gray-700'>
						<img src={heightIcon} width={'48px'} height={'48px'} alt='height' />
					</label>
					<div className='relative mt-1 rounded-lg shadow-sm'>
						<input
							type='text'
							name='height'
							id='height'
							value={height}
							className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-burnt-sienna-200 focus:ring-burnt-sienna-200 sm:text-xl'
							onChange={(e) => setHeight(e.target.value)}
							placeholder='Boyunuzu giriniz..'
						/>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<button
						type='submit'
						onClick={handleHesaplaBtn}
						className='text-white bg-burnt-sienna-500 hover:bg-burnt-sienna-600 focus:outline-none font-medium rounded-lg text-sm sm:text-xl w-auto px-5 py-2.5 text-center'
					>
						Hesapla
					</button>
				</div>
			</div>
		</>
	);
}

export default Calculator;
