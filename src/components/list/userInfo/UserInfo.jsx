import Image from 'next/image';
import './userInfo.css';

const UserInfo = () => {
	return (
		<div className='userInfo'>
			<div className='user'>
				<Image src='/avatar.png' width={50} height={50} alt='avatarDefault' />
				<h2>John Snow</h2>
			</div>
			<div className='icons'>
				<Image src='/more.png' width={20} height={20} alt='avatarDefault' />
				<Image src='/video.png' width={20} height={20} alt='avatarDefault' />
				<Image src='/edit.png' width={20} height={20} alt='avatarDefault' />
			</div>
		</div>
	);
};

export default UserInfo;
