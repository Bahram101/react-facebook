import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import './topbar.css';

export default function Topbar() {
	return (
		<div className='topbarContainer'>
			<div className='topbarLeft'>
                <span className='logo'>Lamasocial</span>
            </div>
			<div className='topbarCenter'>
                <div className="seatchbar">
                    <Search/>
                    <input placeholder='Serach for friend, post or video' className='searchInput'/>
                </div>
            </div>
			<div className='topbarRight'>
                <div className="topbarLinks">
                    <div className="topbarLink">Home</div>
                    <div className="topbarLink">Timeline </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img width="50" src="/assets/person/1.jpeg" alt="profile" />
            </div>
		</div>
	);
}
