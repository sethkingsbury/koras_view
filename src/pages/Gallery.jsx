import MasonryImageList from "../components/MasonryImageList"
import { useState, useEffect} from 'react';

function Gallery() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 991px)'); // Define your media query here
        setIsMobile(mediaQuery.matches);

        // Add event listener to update state when media query changes
        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Clean up the event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);
    
    return (
        <div className="container">
            <div className="page-title">Gallery</div>
            <div className="gallery">
                <MasonryImageList isMobile={isMobile}/>
            </div>
        </div>
    )
}

export default Gallery