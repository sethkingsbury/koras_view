import MasonryImageList from "../components/MasonryImageList"

function Gallery() {
    return (
        <div className="container">
            <div className="page-title">Gallery</div>
            <div className="gallery">
               <MasonryImageList/>  
            </div>
        </div>
    )
}

export default Gallery