import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
function App() {
  const key = process.env.REACT_APP_API_KEY;
  console.log("key:", key);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${key}`,
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log("movies: ", data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      <MovieList tag={"Phim HOT"} data={movies.slice(0, 5)} />
      <MovieList tag={"Phim Đề Cử"} data={movies.slice(0, 5)} />
    </div>
  );
}

export default App;
