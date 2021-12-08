import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <EvilIcons name="pencil" size={35} style={styles.edit} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  edit: {
    marginRight: 10,
  },
});
