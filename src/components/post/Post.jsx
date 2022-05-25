import { MoreVert } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import './post.scss';

export default function Post({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?userId=${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	return (
		<div className='post'>
			<div className='postWrapper'>
				<div className='postTop'>
					<div className='postTopLeft'>
						<Link to={`/profile/${user.username}`}>
							<img
								src={
									user.profilePicture ||
									PF + 'person/noAvatar.jpg'
								}
								alt=''
								className='postProfileImg'
							/>
						</Link>
						<div className='nameAndDate'>
							<div className='postUsername'>
								<Link to={`profile/${user.username}`}>
									{user.username}
								</Link>
							</div>
							<div className='postDate'>
								{format(post.createdAt)}
							</div>
						</div>
					</div>
					<div className='postTopRight'>
						<MoreVert />
					</div>
				</div>
				<div className='postCenter'>
					<span className='postText'>
						{post.title ? post.title : '...'}
					</span>
					<img
						src={PF + `post/${post.img}`}
						alt=''
						className='postImg'
					/>
				</div>
				<div className='postBottom'>
					<div className='postBottomLeft'>
						<img
							src={PF + `/like.png`}
							alt=''
							className='likeIcon'
							onClick={likeHandler}
						/>
						<img
							src={PF + '/heart.png'}
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
