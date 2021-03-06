import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './topbar.scss';

export default function Topbar() {
	return (
		<div className='topbarContainer'>
			<div className='topbarLeft'>
				<Link to='/' className='linkLogo'>
					<span className='logo'>facebook</span>
				</Link>
			</div>
			<div className='topbarCenter'>
				<div className='searchbar'>
					<Search className='searchIcon' />
					<input
						placeholder='Serach for friend, post or video'
						className='searchInput'
					/>
				</div>
			</div>
			<div className='topbarRight'>
				<div className='topbarLinks'>
					<div className='topbarLink'>Home</div>
					<div className='topbarLink'>Timeline </div>
				</div>
				<div className='topbarIcons'>
					<div className='topbarIconItem'>
						<Person />
						<span className='topbarIconBadge'>1</span>
					</div>
					<div className='topbarIconItem'>
						<Chat />
						<span className='topbarIconBadge'>2</span>
					</div>
					<div className='topbarIconItem'>
						<Notifications />
						<span className='topbarIconBadge'>3</span>
					</div>
				</div>
				<Link to="/profile">
					<img
						className='profileImg'
						src='/assets/person/1.jpeg'
						alt='profile'
					/>
				</Link>
			</div>
		</div>
	);
}
