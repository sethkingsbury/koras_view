import { useState } from 'react';
import Button from '@mui/material/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function MobileHeader() {
	const navigate = useNavigate();
	const [nav, setNav] = useState(false);

	const navStyle = nav
		? { transform: 'translateX(0%)' }
		: { transform: 'translateX(100%)' };

	const toggleNav = () => {
		nav ? setNav(false) : setNav(true);
	};

	const navItemStyle = {
		'font-size': '30px',
		'font-family': '"Poiret One", cursive',
    'color': 'white',
	};

	const toHome = () => {
    setNav(false);
		navigate('/');
	};

	const toContact = () => {
    setNav(false);
		navigate('/contact');
	};

	const toGallery = () => {
    setNav(false);
		navigate('/gallery');
	};

	const toReviews = () => {
    console.log("nav");
		navigate('/reviews');
    setNav(false);
	};

	return (
		<div className='mobile-header'>
			<Button variant='text' sx={navItemStyle} onClick={toHome}>
				Koras View
			</Button>

			<button onClick={toggleNav}>
				<RxHamburgerMenu color='white' size={'40px'} />
			</button>

			<ul className='nav-items' style={navStyle}>
				<Button variant='text' sx={navItemStyle} onClick={toHome}>
					Home
				</Button>
				<Button variant='text' sx={navItemStyle} onClick={toGallery}>
					Gallery
				</Button>
				<Button variant='text' sx={navItemStyle} onClick={toReviews}>
					Reviews
				</Button>
				<Button variant='text' sx={navItemStyle} onClick={toContact}>
					Contact Us
				</Button>
			</ul>
		</div>
	);
}

export default MobileHeader;
