import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textTreeStyle}>Child #3</Text>
        </View>
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewTreeStyle}></View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 200
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
        // marginHorizontal: 20,
        // marginVertical: 20
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        ...StyleSheet.absoluteFillObject
        // position: 'absolute'
        // flex: 6,
        // alignSelf: 'flex-end',
        // marginHorizontal: 20,
        // marginVertical: 20
    },
    textTreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
        // marginHorizontal: 20,
        // marginVertical: 20
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // marginTop: 50,
        // top: 50
        alignSelf: 'flex-end'
    },
    viewTreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;
