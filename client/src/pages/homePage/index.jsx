import React from 'react';
import './index.scss';
import SearchBar from '../../components/searchBar/SearchBar';

export default function HomePage() {
	return (
		<div className="homePage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">Find Real Estate & Get Your Dream Place</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure
						voluptate accusantium laudantium deleniti. Error odio sapiente
						debitis quibusdam dolore similique, suscipit non eius porro tempora
						praesentium optio maxime quasi itaque placeat ullam ipsum ut?
						Expedita adipisci aperiam illo? Ad!
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200+</h1>
							<h2>Awards Gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="" srcset="" />
			</div>
		</div>
	);
}
