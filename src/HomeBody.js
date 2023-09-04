import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./HomeBody.css"
import Image1 from "./images/Image1.jpg";
import Image2 from "./images/Image2.jpeg";
import Image3 from "./images/Image3.jpeg";
import Image4 from "./images/Image4.jpeg";
import Image5 from "./images/Image5.jpeg";
import Image6 from "./images/Image6.jpeg";
import Image7 from "./images/Image7.jpg";
import Disney from "./images/disney.jpeg";
import Marvel from "./images/marvel.jpg";
import Pixar from "./images/pixar.jpeg";
import StarWars from "./images/starwars.jpg";
import NatGeo from "./images/natgeo.png"; 
// import useFetch from './useFetch.js';

export default function HomeBody() {
   const [movies, setMovies] = useState(null);
   useEffect(() => {
      fetch('http://localhost:8000/movies')
      .then(res => {
          return res.json();
      })
      .then(data => {
          setMovies(data);
      })
}, []);
    const sliderImages = [ 
        {
           url: Image1,
        },
        {
           url: Image2,
        },
        {
           url: Image3,
        },
        {
           url: Image4,
        },
        {
           url: Image5,
        },
        {
           url: Image6,
        },
        {
           url: Image7,
        },
     ];
     const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }
    return ( 
        <div className="homepage-body">
        <div className="slider">
            <div className = "left">
               <ArrowBackIosIcon onClick = {prevSlide} />
            </div>
            <div className="right"> 
               <ArrowForwardIosIcon onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
                  </div>
               );
            })}
        </div>
        <div className="categories">
            <img className="category disney" src={Disney} alt="Disney" />
            <img className="category marvel" src={Marvel} alt="Marvel" />
            <img className="category pixar" src={Pixar} alt="Pixar" />
            <img className="category starwars" src={StarWars} alt="Star Wars" />
            <img className="category natgeo" src={NatGeo} alt="Nat Geo" />
        </div>
        <div className="heading">
            <p>Recommended for you</p>
        </div>
        <div className='type'>
        {movies && movies.map((movie) => (
            movie.type === "recommend" ? (
                  <img className="type-options" src={movie.backgroundImg} alt={movie.title} />
            ) : null
         ))}
         </div>
        <div className="heading">
            <p>Latest & Trending</p>
        </div>
        <div className="type">
        {movies && movies.map((movie) => (
         movie.type === "trending" ? (
                  <img className="type-options" src={movie.cardImg} alt={movie.title} />
         ) : null
        ))}
        </div>
        <div className="heading">
            <p>New</p>
        </div>
        <div className="type">
        {movies && movies.map((movie) => (
         movie.type === "new" ? (
                  <img className="type-options" src={movie.cardImg} alt={movie.title} />
         ) : null
        ))}
        </div>
        <div className="heading">
            <p>Original</p>
        </div>
        <div className="type">
        {movies && movies.map((movie) => (
         movie.type === "original" ? (
                  <img className="type-options" src={movie.cardImg} alt={movie.title} />
         ) : null
        ))}
        </div>
        </div>
     );
}
