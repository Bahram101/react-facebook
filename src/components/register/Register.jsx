import React, { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './register.scss';

export default function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef(); 
	
	const navigate = useNavigate()

	const handleClick = async (e) => {
		e.preventDefault();

		if (passwordAgain.current.value !== password.current.value) {
			passwordAgain.current.setCustomValidity('Passwords dont match');
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try {
				await axios.post('auth/register', user);
				navigate('/login');
			} catch (err) {
				console.log(err)
			}
		}
	};

	return (
		<div className='login'>
			<div className='loginWrapper'>
				<div className='loginLeft'>
					<h3 className='loginLogo'>Facebook</h3>
					<span className='loginDesc'>
						Connect with friends and the world around you on
						Facebook
					</span>
				</div>
				<div className='loginRight'>
					<form className='loginBox' onSubmit={handleClick}>
						<input
							type='text'
							placeholder='Username'
							className='loginInput'
							ref={username}
							required
						/>
						<input
							type='email'
							placeholder='Email'
							className='loginInput'
							ref={email}
							required
						/>
						<input
							type='password'
							placeholder='Password'
							className='loginInput'
							ref={password}
							required
							minLength={6}
						/>
						<input
							type='password'
							placeholder='Password Again'
							className='loginInput'
							ref={passwordAgain}
							required
						/>
						<button className='loginButton' type='submit'>
							Sign up
						</button>
						<button className='loginRegisterButton'>Log In</button>
					</form>
				</div>
			</div>
		</div>
	);
}
