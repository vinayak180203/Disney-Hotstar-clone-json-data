import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/movie' element={<Movie />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
