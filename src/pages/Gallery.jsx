import MasonryImageList from "../components/MasonryImageList"

function Gallery({ isMobile }) {
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