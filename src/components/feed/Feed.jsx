import React from 'react';
import Share from '../share/Share';
import './feed.scss';

export default function feed() {
	return <div className='feed'>
		<div className="feedWrapper">
	 		<Share/>
		</div>
	</div>;
}
