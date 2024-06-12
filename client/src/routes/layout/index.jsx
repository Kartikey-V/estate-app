import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ListPage from '../../pages/listPage';
import HomePage from '../../pages/homePage';
import { Outlet } from 'react-router-dom';
import './index.scss';

export default function Layout() {
	return (
		<div className="layout">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}
