import './online.scss';

const Online = ({ user }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className='onlineFriend'>
			<div className='onlineFriendImgContainer'>
				<img
					src={PF + user.profilePicture}
					alt=''
					className='onlineFriendProfileImg'
				/>
				<span className='onlineFriendStatus'></span>
			</div>
			<span className='onlineUsername'>{user.username}</span>
		</li>
	);
};
export default Online;
