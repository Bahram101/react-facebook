import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../dummyData';
import './feed.scss';

export default function feed() {
	return (
		<div className='feed'>
			<div className='feedWrapper'>
				<Share />
				{Posts.map((p) => {
					<Post />;
				})}
			</div>
		</div>
	);
}
