import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen -{navigation.getParam('id')} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;