import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  genreList: [],
  loading: true,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // 데이터 도착 전
    handleLoding(state, action) {
      state.loading = true;
    },
    getMovies(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upComingMovies = action.payload.upComingMovies;
      state.genreList = action.payload.genreList;
      // 데이터 도착 후
      state.loading = false;
    },
    // 에러가 났을 때
    failMovies(state, action) {
      state.loading = false;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
