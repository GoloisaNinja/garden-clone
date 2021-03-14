import React, { Component } from 'react';
import HoverImage from 'react-hover-image';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<Link to='/'>
					<img
						className='main-logo'
						alt='GainfulGarden Logo'
						src='/GainfulGarden_mainLogo.png'
					/>
				</Link>
				<div className='link-list'>
					{this.props.user && this.props.user.token && (
						<>
							<NavLink
								exact
								activeClassName='selected'
								className='header-link'
								to='/search'>
								<HoverImage
									className='header-icon'
									alt='search icon'
									src='/search_header_icon.png'
									hoverSrc='/search_icon_Y.png'
								/>
								Search
							</NavLink>
							<NavLink
								exact
								activeClassName='selected'
								className='header-link'
								to='/my_garden'>
								<HoverImage
									className='header-icon'
									alt='search icon'
									src='/garden_header_icon.png'
									hoverSrc='/garden_icon_Y.png'
								/>
								My Garden
							</NavLink>
							<NavLink
								exact
								activeClassName='selected'
								className='header-link'
								to='/wishlist'>
								<HoverImage
									className='header-icon'
									alt='search icon'
									src='/wishlist_header_icon.png'
									hoverSrc='/wishlist_icon_Y.png'
								/>
								Wishlist
							</NavLink>
						</>
					)}
					{!this.props.user && <></>}
					<NavLink
						exact
						activeClassName='selected'
						className='header-link'
						to='/about_us'>
						<HoverImage
							className='header-icon'
							alt='search icon'
							src='/about_header_icon.png'
							hoverSrc='/about_icon_Y.png'
						/>
						About Us
					</NavLink>
					<NavLink
						className='header-link'
						onClick={this.props.handleLogout}
						to='/'>
						<HoverImage
							className='header-icon'
							alt='search icon'
							src='/logout_header_icon.png'
							hoverSrc='/logout_icon_Y.png'
						/>
						Log Out
					</NavLink>
				</div>
			</div>
		);
	}
}
