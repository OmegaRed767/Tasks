import React, {useState, useRef, useMemo} from 'react';
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
//icons
import {left, edit} from '../Icon/Icon';
import styles from '../Styles/Style.AddMovies';
//custom hooks
import useInput from '../CustomHooks/useInput';
//colors
import colors from '../Colors/colors';
//redux action
import {Add_Movie} from '../Redux/Actions/MovieAction';
import {connect} from 'react-redux';
// image picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const AddMovie = props => {
  const [title_length, title, bind_title] = useInput('');
  const [desc_length, desc, bind_desc] = useInput('');
  const [img, set_img] = useState('');
  const descRef = useRef();
  //handle sub
  const handel_sub = () => {
    if (title_length == true || desc_length === true) {
      return;
    }
    const data = {
      _id: props.movie_names.length.toString() + 1,
      img: img,
      title: title,
      desc: desc,
    };
    props.Add_Movie(data);
    props.navigation.goBack();
  };
  //handelpost
  const handelSelect = () => {
    const option = {};
    launchImageLibrary(option, res => {
      if (res.didCancel === true) {
        return set_img('');
      }
      set_img(res.uri);
    });
  };
  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <Text style={styles.title}>Add Movie</Text>
        {/* select movie_poster */}
        <View style={styles.poster_container}>
          <Image
            source={
              img.length > 0 ? {uri: img} : require('../Images/movie.png')
            }
            style={
              img.length === 0 ? styles.movie_poster : styles.selected_posted
            }
          />
          {/*select poster button */}
          <View style={styles.edit_container}>
            <TouchableOpacity onPress={handelSelect} style={styles.edit_button}>
              {edit}
            </TouchableOpacity>
          </View>
        </View>
        {/* Movie title */}
        <View>
          <TextInput
            {...bind_title}
            style={title_length ? styles.error_text_input : styles.text_input}
            placeholder="Movie Title"
            blurOnSubmit={false}
            onSubmitEditing={() => descRef.current.focus()}
          />
          <TextInput
            ref={descRef}
            {...bind_desc}
            style={desc_length ? styles.error_text_input : styles.text_input}
            multiline={true}
            placeholder="Description"
          />
          <View style={styles.button}>
            <Button onPress={handel_sub} title="submit" color={colors.title} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    movie_names: state.movie_names,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Add_Movie: data => dispatch(Add_Movie(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
{
  /*Back button */
}
//  <View
//    style={{
//      position: 'absolute',
//      right: 30,
//      bottom: 30,
//      elevation: 10,
//    }}>
//    <TouchableOpacity onPress={() => props.navigation.goBack()}>
//      {left}
//    </TouchableOpacity>
//  </View>;
