import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BlogContext from './context/BlogContext';

const IndexScreen = () => {
  const posts = useContext(BlogContext);
  return (
    <View>
      <Text>Hi</Text>
      <FlatList
        keyExtractor={(post) => post.title}
        data={posts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
