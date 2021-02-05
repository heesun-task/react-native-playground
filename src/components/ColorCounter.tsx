import React, {useState, useRef,} from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

function ColorCounter({
  color,
  onIncrease,
  onDecrease,
}: {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  console.log('render2', color)
  const timer = useRef<any>(null);

  const startTimer = (fn: () => void) => {
    fn();
    timer.current = setInterval(fn, 200);
  };
  const endTimer = () => {
    clearInterval(timer.current);
  };

  return (
    <View>
      <Text>{color}</Text>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => startTimer(onIncrease)}
        onPressOut={endTimer}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => startTimer(onDecrease)}
        onPressOut={endTimer}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#555",
    alignItems: "center",
    padding: 4,
    margin: 4,
  },
});

export default ColorCounter;
