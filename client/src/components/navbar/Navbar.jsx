import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
	const [menuBarOpen, setMenuBarOpen] = useState(false);
	const user = true;
	return (
		<nav>
			<div className="left">
				<a className="logo" href="/">
					<img src="./logo.png" alt="company-logo" />
					<span>Estate</span>
				</a>
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contact</a>
				<a href="">Agents</a>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
						/>
						<span> John Doe</span>
						<Link to="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<a href="">Sign In</a>
						<a className="register" href="">
							Sign Up
						</a>
					</>
				)}

				<div className="menuIcon">
					<img onClick={() => setMenuBarOpen(!menuBarOpen)} src="/menu.png" />
				</div>
				<div className={menuBarOpen ? 'menu active' : 'menu'}>
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Contact</a>
					<a href="">Agents</a>
					<a href="">Sign In</a>
					<a href="">Sign Up</a>
				</div>
			</div>
		</nav>
	);
}
