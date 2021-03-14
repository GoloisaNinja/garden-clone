import React from 'react';

const Footer = () => {
	const date = new Date();
	const updatedYear = date.getFullYear();
	return (
		<div
			className='footer'
			style={{ backgroundColor: '#6aa375', marginTop: '2em' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}>
				<img
					style={{ maxWidth: '280px' }}
					className='main-logo'
					alt='GainfulGarden Logo'
					src='/GainfulGarden_mainLogo.png'
				/>
				<span style={{ marginTop: '.5em', fontSize: '1em', color: '#ededed' }}>
					{updatedYear}
				</span>
			</div>
		</div>
	);
};

export default Footer;
