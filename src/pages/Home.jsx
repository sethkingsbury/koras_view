import imageData from '../images/images'
import ImageGallery from '../components/ImageGallery'

function Home() {
    return (
        <div className="container">
            <div className="blurb">
                A Magical Place to Relax and Unwind
            </div>
            
            <ImageGallery imageData={imageData}/>

            <div className="blurb-sml">
                Situated in a picturesque setting overlooking the Hapuku River, the Manakau Peak and the Pacific Ocean.
            </div>
        </div>
    )
}

export default Home