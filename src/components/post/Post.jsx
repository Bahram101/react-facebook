import { MoreVert } from '@mui/icons-material';
import './post.scss';

export default function Post({post}) {

	console.log('post', post)

	return (
		<div className='post'>
			<div className='postWrapper'>
				<div className='postTop'>
					<div className='postTopLeft'>
						<img
							src='/assets/person/1.jpeg'
							alt=''
							className='postProfileImg'
						/>
						<div className='nameAndDate'>
							<div className='postUsername'>Bahram Atahanov</div>
							<div className='postDate'>5 mins ago</div>
						</div>
					</div>
					<div className='postTopRight'>
						<MoreVert />
					</div>
				</div>
				<div className='postCenter'>
					<span className='postText'>It is my first text!</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
				</div>
				<div className='postBottom'>
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
						<span className="postLikeCounter">32</span>
                    </div>
                    <div className="postBottomRight">
						<div className="postCommentText">9 comments</div>
					</div>
                </div>
			</div>
		</div>
	);
}
