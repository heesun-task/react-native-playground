import React from "react";
import { Text, StyleSheet } from "react-native";

function LargeCenteredText(props : any){
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text : {
    alignItems:'center',
    fontSize:20,
    textAlign:'center',
    margin:10,
    fontWeight:'bold'
  }
})

export default LargeCenteredText;
