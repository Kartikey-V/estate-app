import React from 'react';
import './index.scss';
import { listData } from '../../constants/dummyData';
import Card from '../card';

export default function List() {
	console.log('listData', listData);
	return (
		<div className="list">
			{listData.map((item) => (
				<Card item={item} key={item.id} />
			))}
		</div>
	);
}
