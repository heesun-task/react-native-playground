import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title={"Components"}
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title={"List"}
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title={"ColorAdjuster"}
        onPress={() => {
          navigation.navigate("ColorAdjuster");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
