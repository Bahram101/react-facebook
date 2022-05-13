import './share.scss';

import React from 'react';
import { PermMedia } from '@mui/icons-material';

export default function Share() {
	return (
		<div className='share'>
			<div className='shareWrapper'>
				<div className='shareTop'>
					<img
						src='/assets/person/1.jpeg'
						alt=''
						className='shareProfileImg'
					/>
                    <input type="text" placeholder="What is in your mind Bahram?" className="shareInput" />
				</div>
				<hr className='shareHr'/>
				<div className='shareBottom'>
					<div className='shareOptions'>
						<div className='shareOption'>
							<PermMedia />
							<span className='shareOptionText'>
								Photo or Video
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
