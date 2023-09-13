import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Search from "./components/pages/Search";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}




// export default function App() {

//   const apiKey = "c3f9fa646764b2c15f2c65f130d65f76";

//   const [movie, setMovie] = useState(null);

//   // Function to getMovies
//    const getMovie = async (searchTerm) => {

//     const response = await fetch(

//       `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}`
//     );

//     const data = await response.json();
//    console.log(data)
//     setMovie(data.results);
//   }

//   useEffect(() => {
//     getMovie("");
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Form moviesearch={getMovie} />
//       < Moviecard movie={movie?.[0]} />
//    <Home />
//     </div>
//   );
// }
