import HuluLogo from "./Hulu_Logo.svg"
import DisneyLogo from "./logo.svg"
import ESPNLogo from "./ESPN_PLUS.png"
import Disney from "./viewers-disney.png"
import plus from "./plus.png"
import pixar from "./pixar.png"
import marvel from "./marvel.png"
import starwars from "./star.jpg"
import natgeo from "./geo.png"
import { Link } from "react-router-dom";

const Content = () => {
    return ( 
        <div className="home">
            <div className="home-content">
            <div className="icons">
                <img className="icon icon-left" src={HuluLogo} alt="Hulu Logo" />
                <img className="icon icon-middle" src={DisneyLogo} alt="Disney+Hotstar Logo" />
                <img className="icon icon-right" src={ESPNLogo} alt="ESPN Logo" />
            </div>
            <div>
                <Link to='/home' className="button"><button className="button-text">Explore</button></Link>
            </div>
            <div className="text">
                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. 
                    As of 03/26/21, the proce of Disney+ and The Disney Bundle will increase by $1.</p>
            </div>
            <div className="services">
                <img className="service disney" src={Disney} alt="Disney" />
                <img className="plus" src={plus} alt="+" />
                <img className="service pixar" src={pixar} alt="Pixar" />
                <img className="plus" src={plus} alt="+" />
                <img className="service marvel" src={marvel} alt="Marvel" />
                <img className="plus" src={plus} alt="+" />
                <img className="service starwars" src={starwars} alt="Star Wars" />
                <img className="plus" src={plus} alt="+" />
                <img className="service natgeo" src={natgeo} alt="Nat Geo" />
            </div>
            </div>
        </div>
     );
}
 
export default Content;