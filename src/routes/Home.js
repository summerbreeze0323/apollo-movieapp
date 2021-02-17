import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return 'Loading...';

  if (data && data.movies) return data.movies.map(movie => <h1>{movie.id}</h1>);
  
  return <h1>Home</h1>;
}
