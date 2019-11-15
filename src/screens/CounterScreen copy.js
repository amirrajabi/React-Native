import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
  switch (state.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button title='Increase' onPress={() => {
        dispatch({ type: 'increment', payload: 1 })
      }}/>
      <Button title='Decrease' onPress={() => {
        dispatch({type: 'increment', payload: 1})
      }}/>
      <Text>Counter is: { count }</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;
