import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMoviesDetail(id));
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return <div>{movieDetail.original_title}</div>;
};

export default MovieDetail;
