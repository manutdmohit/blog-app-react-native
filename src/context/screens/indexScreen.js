import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Context } from '../BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Hi</Text>

      <Button onPress={addBlogPost} title="Generate Blog" />

      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        data={state}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
