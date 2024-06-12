import React, { useState } from 'react';
import './index.scss';

export default function Slider({ images }) {
	const [imageIndex, setImageIndex] = useState(null);
	const changeSlide = (direction) => {
		if (direction == 'left') {
			if (imageIndex === 0) {
				setImageIndex(images.length - 1);
			} else {
				setImageIndex((prev) => prev - 1);
			}
		} else {
			if (imageIndex === images.length - 1) {
				setImageIndex(0);
			} else {
				setImageIndex((prev) => prev + 1);
			}
		}
	};
	return (
		<div className="slider">
			{imageIndex !== null && (
				<div className="fullSlider">
					<div className="arrow" onClick={() => changeSlide('left')}>
						<img src="/arrow.png" alt="" />
					</div>
					<div className="imgContainer">
						<img src={images[imageIndex]} alt="" />
					</div>
					<div className="arrow" onClick={() => changeSlide('right')}>
						<img className="right" src="/arrow.png" alt="" />
					</div>
					<div className="close" onClick={() => setImageIndex(null)}>
						X
					</div>
				</div>
			)}

			<div className="bigImage">
				<img
					src={images[0]}
					onClick={() => {
						setImageIndex(0);
					}}
				/>
			</div>
			<div className="smallImages">
				{images.slice(1).map((image, index) => (
					<img
						src={image}
						key={index}
						onClick={() => {
							setImageIndex(index + 1);
						}}
					/>
				))}
			</div>
		</div>
	);
}
