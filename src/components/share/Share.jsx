import './share.scss';

import React from 'react';
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';

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
							<PermMedia htmlColor="tomato" className="shareIcon"/>
							<span className='shareOptionText'>
								Photo or Video
							</span>
						</div>
						<div className='shareOption'>
							<Label htmlColor="blue" className="shareIcon"/>
							<span className='shareOptionText'>
								Tag
							</span>
						</div>
						<div className='shareOption'>
							<Room htmlColor="green" className="shareIcon"/>
							<span className='shareOptionText'>
								Location
							</span>
						</div>
						<div className='shareOption'>
							<EmojiEmotions htmlColor="goldenRod" className="shareIcon"/>
							<span className='shareOptionText'>
								Feelings
							</span>
						</div>
						<div className="shareButton">Share </div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
