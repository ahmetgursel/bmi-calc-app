import { useState } from 'react';

import idendityIcon from '../../assets/name-icon-64.png';
import weightIcon from '../../assets/weight-icon-64.png';
import heightIcon from '../../assets/height-icon-64.png';

function Calculator() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleHesaplaBtn = () => {
    console.log('name', name);
    console.log('weight', weight);
    console.log('height', height);
  };

  return (
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
            className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
            onChange={(e) => setName(e.target.value)}
            placeholder='İsminizi giriniz..'
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <label htmlFor='weight' className='block mr-3 text-sm font-medium text-gray-700'>
          <img src={weightIcon} width={'48px'} height={'48px'} alt='weight' />
        </label>
        <div className='relative mt-1 rounded-lg shadow-sm'>
          <input
            type='text'
            name='weight'
            id='weight'
            className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
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
            className='block w-full pr-12 border-gray-300 rounded-lg pl-7 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Boyunuzu giriniz..'
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          onClick={handleHesaplaBtn}
          className='text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm sm:text-xl w-auto px-5 py-2.5 text-center'
        >
          Hesapla
        </button>
      </div>
    </div>
  );
}

export default Calculator;
