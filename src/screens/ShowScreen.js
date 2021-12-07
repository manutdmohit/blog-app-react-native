import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.id}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
