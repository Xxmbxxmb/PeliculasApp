import { useEffect, useState } from 'react';
import api from '../api/movieDB';
import { Cast, FullCredits, MovieFull } from '../interfaces/movieInterface';

interface MovieDetail {
  cast: Cast[];
  movieFull?: MovieFull;
  isLoading: boolean;
}

export const useDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const detailPromise = await api.get<MovieFull>(`/${movieId}`);
    const castPromise = api.get<FullCredits>(`/${movieId}/credits`);

    const [detailResp, castResp] = await Promise.all([
      detailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: detailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
