import React from 'react';
import { listData } from '../../constants/dummyData';
import './index.scss';
import Filter from '../../components/filter';
import Card from '../../components/card';
import Map from '../../components/map';

export default function ListPage() {
	const data = listData;
	return (
		<div className="listPage">
			<div className="listContainer">
				<div className="wrapper">
					<Filter />
					{data.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</div>
			</div>
			<div className="mapContainer">
				<Map items={data} />
			</div>
		</div>
	);
}
