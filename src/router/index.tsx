import { createBrowserRouter } from 'react-router-dom';

import { MovieItem, MoviesSearch } from '../components';
import { ListPopularMovies } from '../containers/ListPopularMovies';
import { Films } from '../pages/Films';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/movies',
    element: <App />,
    children: [
        { path: 'home', element: <ListPopularMovies />,  },
        { path: 'films', element: <Films />,  },
        { path: 'search/:search', element: <MoviesSearch /> },
        { path: 'movie/:id', element: <MovieItem /> },
    ]
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);