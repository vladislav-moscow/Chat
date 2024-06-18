import Image from 'next/image';
import './chat.css';

const Chat = () => {
	return (
		<div className='chat'>
			<div className='top'>
				<div className='user'>
					<Image src='/avatar.png' width={60} height={60} alt='avatarDefault' />
					<div className='texts'>
						<span>Jonh Snow</span>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className='icons'>
					<Image src='/phone.png' width={20} height={20} alt='phone' />
					<Image src='/video.png' width={20} height={20} alt='video' />
					<Image src='/info.png' width={20} height={20} alt='info' />
				</div>
			</div>
			<div className='center'></div>
			<div className='bottom'></div>
		</div>
	);
};

export default Chat;
