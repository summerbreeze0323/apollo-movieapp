import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`

export default () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
  if(loading) return 'Loading...'
  if(data && data.movie) return data.movie.title
}