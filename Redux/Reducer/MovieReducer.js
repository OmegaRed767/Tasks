//movie data
import {movie_names} from '../../Data/MovieNames';
const intitial_state = {
  movie_names: movie_names,
  liked: [],
};
export default (state = intitial_state, action) => {
  switch (action.type) {
    case 'refresh':
      state = intitial_state;
    case 'remove':
      return {
        ...state,
        movie_names: state.movie_names.filter(
          lol => lol._id !== action.movie_id,
        ),
      };
    case 'add':
      return {
        ...state,
        movie_names: [action.data, ...state.movie_names],
      };
    default:
      return state;
  }
};
