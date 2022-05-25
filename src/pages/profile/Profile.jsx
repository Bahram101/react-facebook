import React, { useState, useEffect } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
// import Topbar from '../../components/topbar/Topbar';
import axios from 'axios';
import { useParams } from 'react-router';
import './profile.scss';

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?username=${username}`);
			setUser(res.data);
		};
		fetchUser();
	}, []);

	return (
		<>
			<Topbar />
			<div className='profile '>
				<Leftbar className='leftbar' />
				<div className='profileRight'>
					<div className='profileRightTop'>
						<div className='profileCover'>
							<img
								src={user.coverPicture || PF+"person/noCover.jpg"}
								alt=''
								className='profileCoverImg'
							/>
							<img
								src={user.profilePicture || PF+"person/noAvatar.jpg"}
								alt=''
								className='profileUserImg'
							/>
						</div>
						<div className='profileInfo'>
							<h4 className='profileInfoName'>{username}</h4>
							<span className='profileInfoDesc'>{user.desc}</span>
						</div>
					</div>

					<div className='profileRightBottom'>
						<Feed className='feed' username={username} />
						<Rightbar className='rightbar' user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
