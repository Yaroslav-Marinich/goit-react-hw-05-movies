import { Link } from 'react-router-dom';
import './styles.css';

export const MoviesList = ({ movies, state }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li className='movieListItem' key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};