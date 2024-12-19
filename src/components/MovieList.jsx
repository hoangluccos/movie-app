import React from "react";

function MovieList({ tag, data }) {
  const img_url = process.env.REACT_APP_IMG;
  console.log("img_url", img_url);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase mb-3 text-xl">{tag}</h2>
      <div className="list-movies flex flex-row space-x-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[300px] bg-red-600 relative group"
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
      </div>
    </div>
  );
}

export default MovieList;
