import React from "react";

const Banner = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          // style을 줄 때 key 뒤에 오는 내용은 string타입으로 들어가야 인식함
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` +
          ")",
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
