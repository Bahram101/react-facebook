import React from 'react';
import './leftbar.scss';
import {
	RssFeed,
	SlowMotionVideoRounded,
	GroupRounded,
	Chat,
	BookmarkRounded,
	HelpOutlineRounded,
	WorkOutlineRounded,
	EventRounded,
	SchoolRounded,
} from '@mui/icons-material';

export default function Leftbar() {
	return (
		<div className='leftbar'>
			<div className='leftbarWrapper'>
				<ul className='leftbarList'>
					<li className='leftbarListItem'>
						<RssFeed className='leftbarIcon' />
						<span className='leftbarListItemText'>Feed</span>
					</li>
					<li className='leftbarListItem'>
						<Chat className='leftbarIcon' />
						<span className='leftbarListItemText'>Chats</span>
					</li>
					<li className='leftbarListItem'>
						<SlowMotionVideoRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Videos</span>
					</li>
					<li className='leftbarListItem'>
						<GroupRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Groups</span>
					</li>
					<li className='leftbarListItem'>
						<BookmarkRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Bookmarks</span>
					</li>
					<li className='leftbarListItem'>
						<HelpOutlineRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Questions</span>
					</li>
					<li className='leftbarListItem'>
						<WorkOutlineRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Jobs</span>
					</li>
					<li className='leftbarListItem'>
						<EventRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Events</span>
					</li>
					<li className='leftbarListItem'>
						<SchoolRounded className='leftbarIcon' />
						<span className='leftbarListItemText'>Courses</span>
					</li>
				</ul>
				<button className='leftbarButton'>Show more</button>
				<hr className='leftbarHr' />
				<ul className='leftbarFriendList'>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
					<li className='leftbarFriend'>
						<img
							src='/assets/person/2.jpeg'
							alt=''
							className='leftbarFriendImg'
						/>
						<span className='leftbarFriendName'>John Doe</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
