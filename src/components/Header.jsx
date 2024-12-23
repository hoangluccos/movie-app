import React, { useState } from "react";

function Header({ handleSearch }) {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <div className="fixed top-[0px] left-[0px] z-30  bg-black w-full h-[80px] text-white flex justify-between items-center p-3">
      <div className="flex gap-x-6 items-center ">
        <h1 className="text-red-900 text-[40px] font-bold">MOVIE</h1>
        <div className="flex gap-x-4">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
      <div className="search-input flex gap-x-4 items-center">
        <input
          type="text"
          placeholder="Search Movie"
          className="rounded p-3 text-black"
          value={valueSearch}
          onChange={(e) => {
            setValueSearch(e.target.value);
          }}
        />
        <button
          className="bg-red-700 p-2 rounded block"
          onClick={() => handleSearch(valueSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
