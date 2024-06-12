import React, { useState } from 'react';
import './index.scss';

const types = ['buy', 'rent'];

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState({
		type: 'buy',
		location: '',
		minPrice: 0,
		maxPrice: 0,
	});

	const switchSearchType = (type) => {
		setSearchQuery((prev) => {
			return { ...prev, type: type };
		});
	};
	return (
		<div className="searchBar">
			<div className="type">
				{types.map((type) => (
					<button
						key={type}
						onClick={() => switchSearchType(type)}
						className={searchQuery.type === type ? 'active' : ''}>
						{type}
					</button>
				))}
			</div>
			<form action="">
				<input type="text" name="location" placeholder="City Location" />
				<input
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder="minPrice"
				/>
				<input
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					placeholder="maxPrice"
				/>
				<button>
					<img src="/search.png" alt="" srcset="" />
				</button>
			</form>
		</div>
	);
}
