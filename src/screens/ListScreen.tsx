import React from "react";
import {Button, Text, View} from "react-native";

const ListScreen = (props:any) => {
  return (
    <View>
      <Button title={'Home'} onPress={()=>{
        props.navigation.navigate('Home')
      }}/>
      <Text>ListScreenScreen</Text>
    </View>
  );
};
export default ListScreen;
