import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/bmi-logo-64.png';

function NavbarContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const handleHamburgerBtn = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='border-gray-200 px-2 py-2.5 rounded'>
			<div className='container flex flex-wrap items-center justify-between mx-auto'>
				<Link to='/' className='flex items-center'>
					<img src={Logo} alt='BMI Logo' className='h-16 mr-3' />
					<span className='self-center text-xl font-semibold text-burnt-sienna-700 whitespace-nowrap'>
						BMI Hesaplayıcı
					</span>
				</Link>
				<button
					type='button'
					className='inline-flex items-center p-2 ml-3 text-sm rounded-lg text-burnt-sienna-500 md:hidden'
					onClick={handleHamburgerBtn}
				>
					<svg
						className='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
							clipRule='evenodd'
						></path>
					</svg>
				</button>
				<div className={`${isOpen ? 'show' : 'hidden'} w-full md:block md:w-auto items-center`}>
					<ul className='flex flex-col p-4 mt-4 border rounded-lg border-burnt-sienna-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
						<li>
							<Link
								to='/'
								className={`block py-2 pr-4 pl-3 rounded  ${
									location.pathname === '/'
										? 'bg-burnt-sienna-50 text-burnt-sienna-500 md:bg-burnt-sienna-50'
										: 'text-burnt-sienna-700 hover:bg-burnt-sienna-50 hover:text-burnt-sienna-500 md:hover:bg-transparent md:border-0 md:hover:text-burnt-sienna-500'
								}`}
							>
								BMI Hesaplayıcı
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								className={`block py-2 pr-4 pl-3 rounded  ${
									location.pathname === '/about'
										? 'bg-burnt-sienna-50 text-burnt-sienna-500 md:bg-burnt-sienna-50'
										: 'text-burnt-sienna-700 hover:bg-burnt-sienna-50 hover:text-burnt-sienna-500 md:hover:bg-transparent md:border-0 md:hover:text-burnt-sienna-500'
								}`}
							>
								BMI Nedir?
							</Link>
						</li>
						<li>
							<Link
								to='/diet-list'
								className={`block py-2 pr-4 pl-3 rounded  ${
									location.pathname === '/diet-list'
										? 'bg-burnt-sienna-50 text-burnt-sienna-500 md:bg-burnt-sienna-50'
										: 'text-burnt-sienna-700 hover:bg-burnt-sienna-50 hover:text-burnt-sienna-500 md:hover:bg-transparent md:border-0 md:hover:text-burnt-sienna-500'
								}`}
							>
								Diyet Listesi
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavbarContainer;
