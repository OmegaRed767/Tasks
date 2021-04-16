import {StyleSheet, Dimensions} from 'react-native';
//colors
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
  },
  movie_container: {
    marginVertical: 20,
  },
  movie_poster: {
    width: Dimensions.get('window').width,
    height: (280 * Dimensions.get('window').width) / 420,
  },
  movie_title: {
    color: colors.title,

    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 20,
  },
  movie_desc: {
    color: colors.white,
    paddingHorizontal: 10,
  },
  read_more: {
    color: colors.link,
  },
  minimize: {
    color: colors.min,
  },
  icon_container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  title_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
export default styles;
