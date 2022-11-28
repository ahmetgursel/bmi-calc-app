import { format } from 'd3-format';
import { scaleLinear } from 'd3-scale';
import { arc } from 'd3-shape';
import React from 'react';

function Gauge({ value }) {
	const min = 0;
	const max = 50;
	let label, colorRange, color;

	if (value < 18.5) {
		color = 'from-blue-300 to-blue-900';
		colorRange = ['#93c5fd', '#1e3a8a'];
		label = 'Zayıf';
	} else if (value < 24.9) {
		color = 'from-green-300 to-green-900';
		colorRange = ['#86efac', '#14532d'];
		label = 'İdeal';
	} else if (value < 29.9) {
		color = 'from-orange-400 to-rose-400';
		colorRange = ['#fdba74', '#fb7185'];
		label = 'Şişman';
	} else if (value < 34.9) {
		color = 'from-rose-300 to-rose-600';
		colorRange = ['#fda4af', '#e11d48'];
		label = 'Obez';
	} else {
		color = 'from-red-500 to-red-900';
		colorRange = ['#f87171', '#7f1d1d'];
		label = 'Aşırı Obez';
	}

	const backgroundArc = arc()
		.innerRadius(0.65)
		.outerRadius(1)
		.startAngle(-Math.PI / 2)
		.endAngle(Math.PI / 2)
		.cornerRadius(1)();
	const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
	const percent = percentScale(value);
	const angleScale = scaleLinear()
		.domain([0, 1])
		.range([-Math.PI / 2, Math.PI / 2])
		.clamp(true);
	const angle = angleScale(percent);
	const filledArc = arc()
		.innerRadius(0.65)
		.outerRadius(1)
		.startAngle(-Math.PI / 2)
		.endAngle(angle)
		.cornerRadius(1)();

	const getCoordsOnArc = (angle, offset = 10) => [
		Math.cos(angle - Math.PI / 2) * offset,
		Math.sin(angle - Math.PI / 2) * offset,
	];

	const colorScale = scaleLinear().domain([0, 1]).range(colorRange);
	const gradientSteps = colorScale
		.ticks(10)
		.map((value) => colorScale(value));
	const markerLocation = getCoordsOnArc(angle, 1 - (1 - 0.65) / 2);

	return (
		<div className='flex'>
			<div className='text-center'>
				<svg
					className='mx-auto overflow-visible'
					width='9em'
					viewBox={[-1, -1, 2, 1].join(' ')}
				>
					<defs>
						<linearGradient
							id='Gauge__gradient'
							gradientUnits='userSpaceOnUse'
							x1='-1'
							x2='1'
							y2='0'
						>
							{gradientSteps.map((color, index) => (
								<stop
									key={color}
									stopColor={color}
									offset={`${
										index / (gradientSteps.length - 1)
									}`}
								/>
							))}
						</linearGradient>
					</defs>
					<path d={backgroundArc} fill='#dbdbe7' />
					<path d={filledArc} fill='url(#Gauge__gradient)' />
					<line
						y1='-1'
						y2='-0.65'
						stroke='white'
						strokeWidth='0.027'
					/>
					<circle
						cx={markerLocation[0]}
						cy={markerLocation[1]}
						r='0.2'
						stroke='#2c3e50'
						strokeWidth='0.01'
						fill={colorScale(percent)}
					/>
					<path
						d='M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z'
						transform={`rotate(${
							angle * (180 / Math.PI)
						}) translate(-0.2, -0.33)`}
						fill='#6a6a85'
					/>
				</svg>
				<div className='mt-4 text-5xl font-black tabular-nums slashed-zero'>
					{format(',')(value)}
				</div>
				<div className='text-xl font-black'>kg/m2</div>
				{!!label && (
					<div
						className={`mt-4 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br ${color}`}
					>
						{label}
					</div>
				)}
			</div>
		</div>
	);
}

export default Gauge;
