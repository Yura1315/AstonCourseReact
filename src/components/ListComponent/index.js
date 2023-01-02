import React from 'react';
import { data } from '../../data/data';
import './index.css';

const ListComponent = () => {
	console.log(data);
	return (
		<React.Fragment>
			<h2>Programming languages</h2>
			<ul className='list'>
				{data.map((el) => (
					<li
						className='list__item'
						key={el.id}>
						{el.title}
					</li>
				))}
			</ul>
		</React.Fragment>
	);
};

export default ListComponent;
