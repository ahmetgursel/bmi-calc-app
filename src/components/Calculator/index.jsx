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

  // TODO: input schema validation
  // TODO: calculate bmi
  // TODO: after calc bmi show modal & gauge
  // FIXME: color schema

  return (
    <div className='container mt-10 mx-auto  px-2 py-2.5 space-y-6 md:mt-36'>
      <div className='flex items-center justify-center'>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mr-3 '>
          <img src={idendityIcon} width={'48px'} height={'48px'} alt='name' />
        </label>
        <div className='relative mt-1 rounded-lg shadow-sm'>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-full rounded-lg border-gray-300 pl-7 pr-12 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
            onChange={(e) => setName(e.target.value)}
            placeholder='İsminizi giriniz..'
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <label htmlFor='weight' className='block text-sm font-medium text-gray-700 mr-3'>
          <img src={weightIcon} width={'48px'} height={'48px'} alt='weight' />
        </label>
        <div className='relative mt-1 rounded-lg shadow-sm'>
          <input
            type='text'
            name='weight'
            id='weight'
            className='block w-full rounded-lg border-gray-300 pl-7 pr-12 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Kilonuzu giriniz..'
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <label htmlFor='height' className='block text-sm font-medium text-gray-700  mr-3'>
          <img src={heightIcon} width={'48px'} height={'48px'} alt='height' />
        </label>
        <div className='relative mt-1 rounded-lg shadow-sm'>
          <input
            type='text'
            name='height'
            id='height'
            className='block w-full rounded-lg border-gray-300 pl-7 pr-12 focus:border-blue-100 focus:ring-blue-100 sm:text-xl'
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
