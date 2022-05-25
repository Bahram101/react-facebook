import React from 'react';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import './rightbar.scss';

export default function Rightbar({ user }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className='birthdayContainer'>
					<img
						src='/assets/gift.png'
						alt=''
						className='birthdayImg'
					/>
					<span className='birthdayText'>
						<b>Pola Foster</b> and <b>3 other friends</b> have a
						birthday today
					</span>
				</div>
				<img src='/assets/ad.png' alt='' className='rightbarAdv' />
				<h4 className='onlineFriendTitle'>Online friends</h4>
				<ul className='onlineFriendList'>
					{Users.map((user) => (
						<Online key={user.id} user={user} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return <>
			<h4 className='rightbarTitle'>User information</h4>
			<div className="rightbarInfo">
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">City:</span>
					<span className="rightbarInfoVal">{user.city}</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">From:</span>
					<span className="rightbarInfoVal">asdf</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">Relationship:</span>
					<span className="rightbarInfoVal">asdf</span>
				</div>
			</div>
			<h4>User followings</h4>
			<div className="rightbarFollowings">
				<div className="rightbarFollowing">
					<img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Carter</span>
				</div>
			</div>
		</>;
	};

	return (
		<div className='rightbar'>
			<div className='rightBarWrapper'>
				{user ? <ProfileRightbar /> : <HomeRightbar />  }
			</div>
		</div>
	);
}
