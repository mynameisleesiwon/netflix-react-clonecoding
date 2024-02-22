import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      // 데이터 도착 전
      dispatch(movieActions.handleLoding());
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      // 배열안에 있는 것들을 다 기다려서 동시에 불러줌
      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

      dispatch(
        movieActions.getMovies({
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        })
      );
    } catch (error) {
      // 에러 핸들링 하는 곳
      dispatch(movieActions.failMovies());
    }
  };
}

function getMoviesDetail(id) {
  return async (dispatch) => {
    try {
      // 데이터 도착 전
      dispatch(movieActions.handleLoding());

      const movieDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`
      );

      let [movieDetail] = await Promise.all([movieDetailApi]);

      dispatch(
        movieActions.getMoviesDetail({
          movieDetail: movieDetail.data,
        })
      );
    } catch (error) {
      // 에러 핸들링 하는 곳
      dispatch(movieActions.failMovies());
    }
  };
}

export const movieAction = { getMovies, getMoviesDetail };
