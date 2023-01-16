import signImg from '../images/IMG_0008.jpeg'

function Home() {
    return (
        <div className="container">
            <div className="blurb">
                A Magical Place to Relax and Unwind
            </div>

            {/* <p>An amazing place with sexy ginger girls who know how to throw it back - Seth</p> */}
            
            <div className="parent">
                <img className='home-image' src={signImg} alt="koras view" />
            </div>
        </div>
    )
}

export default Home