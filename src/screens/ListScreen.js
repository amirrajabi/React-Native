import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {

    const friends = [
        {name: 'Friend #1', age: 31},
        {name: 'Friend #2', age: 32},
        {name: 'Friend #3', age: 33},
        {name: 'Friend #4', age: 34},
        {name: 'Friend #5', age: 35},
        {name: 'Friend #6', age: 36},
        {name: 'Friend #7', age: 37},
        {name: 'Friend #8', age: 38},
        {name: 'Friend #9', age: 39}
    ];

    return (
        <FlatList
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50
    }
});

export default ListScreen;
