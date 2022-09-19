import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여주고

  // true : 데이터 도착 전
  // false : 데이터 도착 후 or 에러가 났을 때
  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div>
      {/* 배너에는 인기있는 영화의 가장 첫번째걸 보여주련다. */}
      {/* 로딩스피너를 만들었으면 조건부 렌더링을 지워도 된다. */}
      <Banner movie={popularMovies.results[0]} />
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>UpComing Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
