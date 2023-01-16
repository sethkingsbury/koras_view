import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();

	function toHome() {
		navigate('/');
	}

	function toContact() {
		navigate('/contact');
	}

	function toGallery() {
		navigate('/gallery');
	}

	return (
		<div className='header'>
			<div className='header-left'><p>Kora's View</p></div>
			<div className='header-right'>
				<div className='nav-item'>
					<Button variant='contained' sx={{ color: 'white' }} onClick={toHome}>
						Home
					</Button>
				</div>
				<div className='nav-item'>
					<Button variant='text' sx={{ color: 'white' }} onClick={toGallery}>
						Gallery
					</Button>
				</div>
				<div className='nav-item'>
					<Button variant='text' sx={{ color: 'white' }} onClick={toContact}>
						Contact
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
