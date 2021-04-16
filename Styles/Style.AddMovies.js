import {StyleSheet} from 'react-native';
//color
import colors from '../Colors/colors';
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  movie_poster: {
    width: 100,
    height: 100,
  },
  selected_posted: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  poster_container: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 200 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: colors.title,
  },
  edit_button: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.title,
  },
  edit_container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  text_input: {
    color: colors.white,
    borderColor: colors.white,
    borderWidth: 2,
    padding: 4,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  error_text_input: {
    color: colors.white,
    borderColor: colors.min,
    borderWidth: 2,
    padding: 4,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
export default styles;
