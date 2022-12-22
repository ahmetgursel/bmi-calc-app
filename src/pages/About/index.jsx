import React from 'react';

function About() {
	return (
		<div className='container flex-col mt-10 mb-10 shadow-lg rounded-lg mx-auto px-2 py-2.5 divide-y-2 space-y-4 divide-burnt-sienna-100 max-w-sm md:max-w-2xl lg:max-w-4xl bg-burnt-sienna-100 md:mt-36'>
			<div className='text-3xl font-black text-center text-burnt-sienna-500'>
				<h1>Vücut Kitle İndeksi(BMI) Nedir?</h1>
			</div>
			<div className='p-5 text-lg font-normal text-justif text-burnt-sienna-900'>
				<p>
					Vücut kitle indeksi (VKİ) ya da boy kilo indeksi; bir kişinin vücudundaki tahmini yağ oranını
					gösteren bir hesaplama yöntemidir. Bu yöntemde kişinin boy kilo oranı esas alınır. İndeksin verdiği
					sonuca göre kişinin mevcut kilosunun, ideal kilosuna yakınlığı ve uzaklığı hesaplanabilir.
					<br />
					<br />
					<span className='font-bold'>0-18.5:</span> Zayıf kabul edilen vücut kitle indeksi aralığı olarak
					bilinir. Kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması şarttır.
					<br />
					<br />
					<span className='font-bold'>18.5-24.9:</span> Kişinin ideal kilosunda olduğu gösteren vücut kitle
					indeksi aralığıdır.
					<br />
					<br />
					<span className='font-bold'>25-29.9:</span> Kişinin fazla kilolu olduğunu ifade eder. Diyetisyen
					eşliğinde sağlıklı bir şekilde kilo verilmesi tavsiye edilir.
					<br />
					<br />
					<span className='font-bold'>30-34.9:</span> Kişinin birinci derece obez kategorisinde yer aldığını
					gösterir.
					<br />
					<br />
					<span className='font-bold'>35+:</span> İkinci derece obez kategorisinde yer alan bu kişi; kalp ve
					damar hastalıklarına karşı savunmasızdır.
				</p>
			</div>
		</div>
	);
}

export default About;
