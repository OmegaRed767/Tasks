import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Modal,
} from 'react-native';
//style
import styles from '../Styles/Styles.FlatListTask';
//movie data
import {movie_names} from '../Data/MovieNames';
//icons
import {bin, like, plus} from '../Icon/Icon';
//color
import colors from '../Colors/colors';

const FlatListTask = props => {
  const [data, set_data] = useState(movie_names);
  const [show_desc, set_show_desc] = useState([]);
  const [liked_movies, set_liked_movies] = useState([]);
  const [refreshing, set_refreshing] = useState(false);
  //handelRefresh
  const handelRefresh = () => {
    set_refreshing(prev => !prev);
    setTimeout(() => {
      set_data(movie_names);
      set_refreshing(prev => !prev);
    }, 1000);
  };
  //show and hide description
  const handelShow = (add_rmv, movie_id) => {
    let new_arr = show_desc.slice();
    if (add_rmv === 0) {
      new_arr.push(movie_id);
      return set_show_desc(new_arr);
    }

    return set_show_desc(new_arr.filter(doc => doc !== movie_id));
  };
  //like and unlike
  const handelLIke = (like_unlike, movie_id) => {
    let new_arr = liked_movies.slice();
    if (like_unlike === -1) {
      new_arr.push(movie_id);
      return set_liked_movies(new_arr);
    }
    return set_liked_movies(liked_movies.filter(doc => doc !== movie_id));
  };
  //handel delete
  const handeldelete = _id => {
    let new_arr = data.slice();
    set_data(new_arr.filter(lol => lol._id !== _id));
  };
  const renderItem = ({item}) => (
    <View style={styles.movie_container}>
      <View style={styles.title_container}>
        <Text style={styles.movie_title}>{item.title}</Text>
      </View>

      <Image source={{uri: item.img}} style={styles.movie_poster} />
      <View style={styles.icon_container}>
        <TouchableOpacity
          onPress={() => handelLIke(liked_movies.indexOf(item._id), item._id)}>
          {like(
            liked_movies.indexOf(item._id) === -1 ? colors.white : colors.min,
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handeldelete(item._id)}>
          <Text>{bin}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.movie_desc}>
        {show_desc.indexOf(item._id) !== -1 ? (
          <Text>
            {item.desc}
            <Text
              onPress={() => handelShow(1, item._id)}
              style={styles.minimize}>
              ...Minimize
            </Text>
          </Text>
        ) : (
          <Text>
            {`${item.desc.slice(0, 200)}...`}
            <Text
              onPress={() => handelShow(0, item._id)}
              style={styles.read_more}>
              Read more
            </Text>
          </Text>
        )}
      </Text>
    </View>
  );
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Movies</Text>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handelRefresh} />
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={{paddingBottom: 80}}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.min,
            }}>
            <Text style={{color: colors.white}}>No Movies Found</Text>
          </View>
        }
        initialNumToRender={5}
      />
      {/* add button */}

      <View
        style={{
          position: 'absolute',
          right: 30,
          bottom: 30,
          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('AddMovie')}>
          {plus}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FlatListTask;
