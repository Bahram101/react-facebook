import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import { Users } from '../../dummyData';
import './post.scss';

export default function Post({ post }) {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => { 
		setLike(isLiked ? like-1 : like+1);
		setIsLiked(!isLiked);
	};

	return (
		<div className='post'>
			<div className='postWrapper'>
				<div className='postTop'>
					<div className='postTopLeft'>
						<img
							src={
								Users.filter(
									(user) => user.id === post.userId
								)[0].profilePicture
							}
							alt=''
							className='postProfileImg'
						/>
						<div className='nameAndDate'>
							<div className='postUsername'>
								{
									Users.filter(
										(user) => user.id === post.userId
									)[0].username
								}
							</div>
							<div className='postDate'>{[post.date]}</div>
						</div>
					</div>
					<div className='postTopRight'>
						<MoreVert />
					</div>
				</div>
				<div className='postCenter'>
					<span className='postText'>
						{post.desc ? post.desc : '...'}
					</span>
					<img src={post.photo} alt='' className='postImg' />
				</div>
				<div className='postBottom'>
					<div className='postBottomLeft'>
						<img
							src='/assets/like.png'
							alt=''
							className='likeIcon'
							onClick={likeHandler}
						/>
						<img
							src='/assets/heart.png'
							alt=''
							className='likeIcon'
							onClick={likeHandler}
						/>
						<span className='postLikeCounter'>{like}</span>
					</div>
					<div className='postBottomRight'>
						<div className='postCommentText'>
							{post.comment} comments
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
