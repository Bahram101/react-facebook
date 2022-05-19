import './online.scss';

const Online = ({user})=> {
	return (
		<li className='onlineFriend'>
			<div className='onlineFriendImgContainer'>
				<img
					src={user.profilePicture}
					alt=''
					className='onlineFriendProfileImg'
				/>
				<span className='onlineFriendStatus'></span>
			</div>
			<span className='onlineUsername'>{user.username}</span>
		</li>
	);
}
export default Online;