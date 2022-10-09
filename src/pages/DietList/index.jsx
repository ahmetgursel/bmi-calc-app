import breakfastIcon from '../../assets/breakfast-icon-64.png';
import lunchIcon from '../../assets/lunch-icon-64.png';
import snackIcon from '../../assets/snack-icon-64.png';
import dinnerIcon from '../../assets/dinner-icon-64.png';

function DietList() {
  //TODO: color schema
  return (
    <div className='container mt-10 mb-10 shadow-lg rounded-lg mx-auto px-1 py-2.5 max-w-sm md:max-w-2xl lg:max-w-4xl bg-gray-100 md:mt-36'>
      <div className='text-3xl font-black text-center text-blue-500 '>
        <h1>Diyet Listesi</h1>
      </div>

      <div className='max-w-lg px-10 mx-auto mt-10 text-2xl font-bold text-blue-400'>
        <div className='flex-col justify-center rounded-lg'>
          <h2 className='flex justify-center'>
            Kahvaltı
            <img
              className='ml-3'
              src={breakfastIcon}
              width={'36px'}
              height={'36px'}
              alt='breakfast-icon'
            />
          </h2>
          <p className='flex mt-5 text-lg font-normal text-black'>
            ✓ 2 yumurta beyazı ya da 113 gram yumurta
            <br />✓ 1 adet hindi sosis
            <br />✓ 113 gram fasulye
            <br />✓ 113 gram yulaf ezmesi
            <br />✓ 113 gram yağsız süzme peynir
            <br />✓ 170 gram yoğurt
            <br />✓ 1 dilim tam tahıllı ya da tam buğday ekmek
          </p>
        </div>

        <div className='flex-col justify-center mt-10 rounded-lg'>
          <h2 className='flex justify-center'>
            Öğle Yemeği
            <img
              className='ml-3'
              src={lunchIcon}
              width={'36px'}
              height={'36px'}
              alt='breakfast-icon'
            />
          </h2>
          <p className='flex mt-5 text-lg font-normal text-black'>
            ✓ 113 gram fasulye / bezelye / balkabağı
            <br />✓ 6 dilim hindi eti
            <br />✓ İsteğe bağlı 30 gram yağsız peynir
            <br />✓ 1 porsiyon fırında pişmiş et
          </p>
        </div>

        <div className='flex-col justify-center mt-10 rounded-lg'>
          <h2 className='flex justify-center'>
            Ara Öğün
            <img
              className='ml-3'
              src={snackIcon}
              width={'36px'}
              height={'36px'}
              alt='breakfast-icon'
            />
          </h2>
          <p className='flex mt-5 text-lg font-normal text-black'>
            ✓ Hindi ya da jambon ruloları
            <br />✓ Sade ya da light yoğurt
            <br />✓ 1 fincan kahve
          </p>
        </div>

        <div className='flex-col justify-center mt-10 mb-10 rounded-lg'>
          <h2 className='flex justify-center'>
            Akşam Yemeği
            <img
              className='ml-3'
              src={dinnerIcon}
              width={'36px'}
              height={'36px'}
              alt='breakfast-icon'
            />
          </h2>
          <p className='flex mt-5 text-lg font-normal text-black'>
            ✓ 113 gram fasulye / bezelye / balkabağı
            <br />✓ 6 dilim hindi eti
            <br />✓ İsteğe bağlı 30 gram yağsız peynir
            <br />✓ 1 porsiyon fırında pişmiş et
          </p>
        </div>
      </div>
    </div>
  );
}

export default DietList;
