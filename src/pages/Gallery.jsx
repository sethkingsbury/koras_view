import MasonryImageList from "../components/MasonryImageList"

function Gallery() {
    return (
        <div className="container">
            <h1 className="page-title">Gallery</h1>
            <div className="gallery">
               <MasonryImageList/>  
            </div>
        </div>
    )
}

export default Gallery