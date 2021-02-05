import React, { useReducer } from "react";
import { Button, Text, View } from "react-native";
import LargeCenteredText from "../components/LargeCenteredText";

const reducer = (state: any, action: any) => {
  //state === {count : number}
  //action === {type: 'increment' || 'decrement', payload: 1}
  console.log(state)
  switch (action.type) {
    case "increment":
      return {...state, count : state.count + action.payload};
    case "decrement":
      return {...state, count : state.count - action.payload};
    default:
      return state;
  }
};
const ComponentsScreen = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <View>
      <Button
        title={"Home"}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <Text>ComponentScreen</Text>

      <LargeCenteredText>count : {state.count}</LargeCenteredText>

      <Button title={"Increase"} onPress={() => {dispatch({type:'increment', payload:1})}} />
      <Button title={"Decrease"} onPress={() => {dispatch({type:'decrement', payload:1})}} />
    </View>
  );
};
export default ComponentsScreen;
