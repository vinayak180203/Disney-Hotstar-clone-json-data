import "./MovieBody.css";
import PlayBlack from "./play-icon-black.png";
import PlayWhite from "./play-icon-white.png";

const MovieBody = () => {
    return ( 
        <div className="moviepage-body">
            <div className="moviepage-content">
                <div className="movie-buttons">
                    <button className="button-play"><img className="image-play" src={PlayBlack} alt="Play"/>PLAY</button>
                    <button className="button-trailer"><img className="image-trailer" src={PlayWhite} alt="TRAILER"/>TRAILER</button>
                    <button className="button-plus">+</button>
                </div>
                <div className="movie-subtitle">
                    <p>2021 • 1 Season • Science Fiction, Action-Adventure, Buddy</p>
                </div>
                <div className="movie-description">
                    <p>Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, 
                        and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” 
                        team up on a global adventure that tests their abilities—and their patience.</p>
                </div>
            </div>
        </div>
     );
}
 
export default MovieBody;