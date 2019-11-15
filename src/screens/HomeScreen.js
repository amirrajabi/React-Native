import React from 'react';
import {  View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  // console.log(props.navigation);
  
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Categories')}
        title="Categories" />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Login" />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Register" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Counter Screen" />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Color Screen" />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Square Screen" />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Text Screen" />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Box Screen" />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
});

export default HomeScreen;

/*
<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
  <Text>List Demo</Text>
</TouchableOpacity>
*/