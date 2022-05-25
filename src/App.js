import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { jsx } from '@emotion/react';

function App() {

	const { user } = useContext(AuthContext);

	console.log('user', user)

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={user ? <Home /> : <Navigate to='/login' />}
				/>
				<Route path='/profile' element={<Profile />} />
				<Route path='/profile/:username' element={<Profile />} />
				<Route
					path='/login'
					element={user ? <Navigate to='/' /> : <Login />}
				/>
				<Route
					path='/register'
					element={user ? <Navigate to='/' /> : <Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
