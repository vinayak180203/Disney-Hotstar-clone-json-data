import DisneyPlusHotstar from "./disney+hotstar.png"
import "./Sidebar.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebar-logo'>
      <img src={DisneyPlusHotstar} alt='DisneyPlusHotstar' />
      </div>
      <div className='sidebar-icons'>
        <i className='sidebar-icon far fa-user'></i>
        <i className='sidebar-icon fas fa-search'></i>
        <i className='sidebar-icon fa-solid fa-house'></i>
        <Link to='/home/movie'><i className='sidebar-icon fas fa-tv'></i></Link>
        <i className='sidebar-icon fa-solid fa-film'></i>
        <i className='sidebar-icon far fa-futbol'></i>
      </div>
    </div>
  );
};

export default Sidebar;

