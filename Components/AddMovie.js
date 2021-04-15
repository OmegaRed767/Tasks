import React, {useState} from 'react';
import {Text, VIew, Button, View, TouchableOpacity} from 'react-native';
import {plus} from '../Icon/Icon';
import styles from '../Styles/Style.AddMovies';
const AddMovie = props => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Add Movie</Text>
      <View
        style={{
          position: 'absolute',
          right: 30,
          bottom: 30,
          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          {plus}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddMovie;
