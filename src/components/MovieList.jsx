import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
function MovieList({ tag, data }) {
  const key = process.env.REACT_APP_API_KEY;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerId, setTrailerId] = useState(false);
  const img_url = process.env.REACT_APP_IMG;
  console.log("img_url", img_url);

  const handleWatchTrailer = async (id) => {
    console.log(id);
    //---------
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${key}`,
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data.results[0].key);
      //----
      setTrailerId(data.results[0].key);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase mb-3 text-xl">{tag}</h2>
      <Carousel responsive={responsive} className="list-movies flex flex-row">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[300px]  relative group"
              onClick={() => handleWatchTrailer(item.id)}
            >
              <div className="absolute w-full h-full group-hover:scale-105 transition ease-in-out cursor-pointer">
                <div className="absolute w-full h-full bg-black top-0 left-0 right-0 opacity-30"></div>
                <img
                  src={img_url + item.poster_path}
                  alt="temp"
                  className="w-full h-full object-cover "
                />
                <div className="absolute w-full h-full top-0 left-0 right-0 "></div>
                <div className="absolute bottom-3 w-full flex justify-center">
                  <p className="text-center">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerId} opts={opts} />
      </Modal>
    </div>
  );
}

export default MovieList;
