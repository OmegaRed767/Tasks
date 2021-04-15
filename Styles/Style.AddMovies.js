import {StyleSheet} from 'react-native';
//color
import colors from '../Colors/colors';
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  title: {
    color: colors.title,
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
export default styles;
