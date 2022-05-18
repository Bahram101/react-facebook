import React from 'react';
import './rightbar.scss';

export default function Rightbar() {
	return (
		<div className='rightbar'>
			<div className='rightBarWrapper'>
				<div className='birthdayContainer'>
					<img src="/assets/gift.png" alt="" className="birthdayImg" />
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img src="/assets/ad.png" alt="" className="rightbarAdv" />
				<h4 className="onlineFriendTitle">Online friends</h4>
				<ul className="onlineFriendList">
					<li className="onlineFriend">
						<div className="onlineFriendImgContainer">
							<img src="/assets/person/3.jpeg" alt="" className="onlineFriendProfileImg" />
							<span className="onlineFrinedStatus"></span>
						</div>
						<span className="onlineUsername">John Carter</span>
					</li>
					<li className="onlineFriend">
						<div className="onlineFriendImgContainer">
							<img src="/assets/person/3.jpeg" alt="" className="onlineFriendProfileImg" />
							<span className="onlineFrinedStatus"></span>
						</div>
						<span className="onlineUsername">John Carter</span>
					</li>
					<li className="onlineFriend">
						<div className="onlineFriendImgContainer">
							<img src="/assets/person/3.jpeg" alt="" className="onlineFriendProfileImg" />
							<span className="onlineFrinedStatus"></span>
						</div>
						<span className="onlineUsername">John Carter</span>
					</li>
					<li className="onlineFriend">
						<div className="onlineFriendImgContainer">
							<img src="/assets/person/3.jpeg" alt="" className="onlineFriendProfileImg" />
							<span className="onlineFrinedStatus"></span>
						</div>
						<span className="onlineUsername">John Carter</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
