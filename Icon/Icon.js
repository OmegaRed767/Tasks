import React from 'react';
import colors from '../Colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
export const bin = <Icon name="trash" size={19} color={colors.title} />;
export const like = data => <Icon name="heart" size={20} color={data} solid />;
export const plus = (
  <Icon
    name="plus-circle"
    size={50}
    style={{
      backgroundColor: colors.title,
      borderRadius: 100 / 2,
    }}
    color={colors.white}
    solid
  />
);
