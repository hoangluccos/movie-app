import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [movies_Star, setMovies_Star] = useState([]);
  const [movies_Search, setMovies_Search] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const key = process.env.REACT_APP_API_KEY;
  console.log("key:", key);

  const handleSearch = async (valueSearch) => {
    console.log(valueSearch);
    //-----
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${valueSearch}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${key}`,
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      setMovies_Search(data.results);
      setIsSearch(true);
      //----
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const url_popular =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url_rated =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${key}`,
        },
      };
      const [res1, res2] = await Promise.all([
        fetch(url_popular, options),
        fetch(url_rated, options),
      ]);
      const data_popular = await res1.json();
      const data_rated = await res2.json();
      console.log("movies_popular: ", data_popular);
      console.log("movies_rated: ", data_rated);
      setMovies(data_popular.results);
      setMovies_Star(data_rated.results);
    };
    fetchMovies();
  }, []);
  return (
    <div className="bg-black pb-10">
      <Header handleSearch={handleSearch} />
      <Banner />
      {!isSearch ? (
        <>
          <MovieList tag={"Phim HOT"} data={movies} />
          <MovieList tag={"Phim Đề Cử"} data={movies_Star} />
        </>
      ) : (
        <MovieList tag={"Kết quả tìm kiếm"} data={movies_Search} />
      )}
    </div>
  );
}

export default App;
