import React from 'react';
import colors from '../Colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
export const bin = <Icon name="trash" size={19} color={colors.title} />;
export const like = data => <Icon name="heart" size={20} color={data} solid />;
export const plus = (
  <Icon
    name="plus-circle"
    style={{backgroundColor: colors.grey, borderRadius: 50 / 2}}
    size={50}
    color={colors.white}
    solid
  />
);
export const left = (
  <Icon
    name="arrow-circle-left"
    style={{backgroundColor: colors.grey, borderRadius: 50 / 2}}
    size={50}
    color={colors.white}
    solid
  />
);

export const edit = (
  <Icon name="pencil-alt" size={20} color={colors.black} solid />
);
