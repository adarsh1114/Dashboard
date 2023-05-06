import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import "./Chart.css"

const ChartBar = () => {


const data = [
{name: 'Jannat Ve...', songs: 40},
{name: 'Tum Hi ho..', songs: 70},
{name: 'Lahra do.', songs: 30},
{name: 'Tu Maan Meri Jaan.', songs: 100}
];


return (
<BarChart className='Bar' width={500} height={300} data={data}>
	<Bar dataKey="songs" fill="green" />
	<CartesianGrid stroke="#ccc" />
	<XAxis dataKey="name" />
	<YAxis />
</BarChart>
);
}

export default ChartBar;

