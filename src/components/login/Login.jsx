import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './login.scss';

export default function Login() {
	const email = useRef();
	const password = useRef();
	const { user, isFetching, error, dispatch } = useContext(AuthContext);

	const handleClick = (e) => {
		e.preventDefault();
		loginCall(
			{
				email: email.current.value,
				password: password.current.value,
			},
			dispatch
		);
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
							type='email'
							placeholder='Email'
							className='loginInput'
							required
							ref={email}
						/>
						<input
							type='password'
							placeholder='Password'
							className='loginInput'
							required
							ref={password}
							minLength='6'
						/>
						<button className='loginButton' disabled={isFetching} type="submit">
							{isFetching ? (
								<CircularProgress
									style={{ marginTop: '3px' }}
									color='inherit'
									size='25px'
								/>
							) : (
								'Log In'
							)}
						</button>
						<span className='loginForgot'>Forgot Password?</span>
						<button className='loginRegisterButton' disabled={isFetching}>
						{isFetching ? (
								<CircularProgress
									style={{ marginTop: '3px' }}
									color='inherit'
									size='25px'
								/>
							) : (
								'Create a new Account'
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
