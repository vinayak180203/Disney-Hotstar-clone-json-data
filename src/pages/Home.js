import Navbar from '../Navbar';
import HomeBody from '../HomeBody';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Home = () => {
    return ( 
        <div className="App">
            <div className="App">
            <Navbar />
            <div className="main-content">
            <Sidebar />
            <HomeBody />
            <Footer />
            </div>
            </div>
        </div>
     );
}
 
export default Home;    