import React from 'react';
import {  View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesCard = ({title, imageSource, subs}) => {
  return (
    <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>Total Sub Category : {subs}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CategoriesCard;