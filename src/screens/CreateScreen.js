import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <View>
        <Button title="Add Blog Post" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
