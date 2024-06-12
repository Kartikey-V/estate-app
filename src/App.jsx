import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from './pages/listPage';
import Layout from './routes/layout';
import SinglePage from './pages/singlePage';
import ProfilePage from './pages/profilePage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/:id', element: <SinglePage /> },
				{ path: '/list', element: <ListPage /> },
				{ path: '/profile', element: <ProfilePage /> },
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
		// <div className="layout">
		// 	<div className="navbar">
		// 		<Navbar />
		// 	</div>
		// 	<div className="content">
		// 		<HomePage />
		// 	</div>
		// </div>
	);
}

export default App;
