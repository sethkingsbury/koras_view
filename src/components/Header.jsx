import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/')
    }

    const toContact = () => {
        navigate('/contact')
    }

    const toGallery = () => {
        navigate('/gallery')
    }


    return (
        <div className="header">
            <div className="header-left">
            <div className='nav-item'><Button variant="text" sx={{color: 'white'}} onClick={toHome}>Home</Button></div>
            <div className='nav-item'><Button variant="text" sx={{color: 'white'}} onClick={toGallery}>Gallery</Button></div>
            <div className='nav-item'><Button variant="text" sx={{color: 'white'}} onClick={toContact}>Contact</Button></div>
            </div>
            <div className="header-center">
            <p>Kora's View</p>
            </div>
            <div className="header-right"/>
        </div>
    )
}

export default Header