import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import CategoriesCard from '../components/CategoriesCard';

const Categories = ({navigation}) => {
  return (
    <View>
        <CategoriesCard
            title="Arts & Media"
            imageSource={require('../../assets/categories/arts-media-s.jpg')}
            subs={11}
        />
        <CategoriesCard
            title="Business & Administration"
            imageSource={require('../../assets/categories/business-administration-s.jpg')}
            subs={24} />
        <CategoriesCard
            title="Fashion & Beauty"
            imageSource={require('../../assets/categories/fashion-beauty-s.jpg')}
            subs={57} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default Categories;
