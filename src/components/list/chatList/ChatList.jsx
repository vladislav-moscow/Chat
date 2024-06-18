'use client';
import Image from 'next/image';
import './chatList.css';
import { useState } from 'react';

const ChatList = () => {
	const [addMode, setAddMode] = useState(false);
	return (
		<div className='chatList'>
			<div className='search'>
				<div className='searchBar'>
					<Image src='/search.png' width={20} height={20} alt='поиск' />
					<input type='text' placeholder='Поиск...' />
				</div>
				<Image
					src={addMode ? '/minus.png' : '/plus.png'}
					width={36}
					height={36}
					alt='добавить'
					className='add'
					onClick={() => setAddMode((prev) => !prev)}
				/>
			</div>
			<div className='item'>
				<Image src='/avatar.png' width={50} height={50} alt='avatarDefault' />
				<div className='texts'>
					<span>John Snow</span>
					<p>Hello world</p>
				</div>
			</div>
			<div className='item'>
				<Image src='/avatar.png' width={50} height={50} alt='avatarDefault' />
				<div className='texts'>
					<span>John Snow</span>
					<p>Hello world</p>
				</div>
			</div>
		</div>
	);
};

export default ChatList;
