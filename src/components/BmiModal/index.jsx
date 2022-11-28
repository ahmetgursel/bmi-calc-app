import Gauge from '../Gauge';

function BmiModal({ handleCloseModalBtn, handleDietListBtn, label, value }) {
	return (
		<>
			<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
				<div className='relative w-auto max-w-3xl mx-auto my-6'>
					{/*content*/}
					<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
						{/*header*/}
						<div className='p-5 mx-auto border-b border-solid rounded-t border-slate-200'>
							<h3 className='mx-auto text-3xl font-black'>
								{label}
							</h3>
						</div>
						{/*body*/}
						<div className='p-6 mx-auto'>
							<Gauge label={label} value={value} />
						</div>
						{/*footer*/}
						<div className='flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200'>
							<button
								className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
								type='button'
								onClick={handleCloseModalBtn}
							>
								Kapat
							</button>
							<button
								className='px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-burnt-sienna-500 hover:bg-burnt-sienna-600 hover:shadow-lg focus:outline-none'
								type='button'
								onClick={handleDietListBtn}
							>
								Diyet Listesi
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
		</>
	);
}

export default BmiModal;
