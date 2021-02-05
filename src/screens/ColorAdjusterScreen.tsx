import React, { useState, useEffect, useReducer, useCallback } from "react";
import { Button, FlatList, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const ColorsList = ({ colors, setColors }: { colors: any; setColors: any }) => {
  const addHandler = () => {
    setColors((cur: any) => [...cur, randomRgb()]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={"Add Colors"}
        onPress={() => {
          addHandler();
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(i, v) => v.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: item }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const reducer = (state: any, action: any) => {
  //state === {red:0,green:0,blue:0}
  //action === {colorToChange: 'red' || 'green' || 'blue' || 'initial , amount: 15 || -15}
  //action에 오는 값은 type, payload로 명칭하는 컨벤션이 있음 (optional)  - action : {type : 'change_red', payload : 15}
  //type : 어떤 변화에 대한 옵션. string
  //payload : 옵션을 변경하는 주요 data (..영어로 적혀있어서 매끄럽지가 않네 ㅠㅠ)

  //action === {type: 'change_red' || 'change_green' || 'change_blue' || 'change_initial' , payload: 15 || -15}
  const getAmount = (prev: number, amount: number) => {
    if (prev + amount >= 255) {
      return 255;
    } else if (prev + amount <= 0) {
      return 0;
    } else {
      return prev + amount;
    }
  };

  switch (action.type) {
    case "change_red": // 반드시 값을 리턴해야 함. return;로 리턴 시 errr
      console.log("state.red",getAmount(state.red, action.payload));
      return { ...state, red: getAmount(state.red, action.payload) };

    case "change_green":
      return {
        ...state,
        green: getAmount(state.green, action.payload),
      };
    case "change_blue":
      return {
        ...state,
        blue: getAmount(state.blue, action.payload),
      };
    case "change_initial":
      return {
        red: 123,
        green: 123,
        blue: 123,
      };
    default:
      return state;
  }
};

const ColorAdjusterScreen = (props: any) => {
  const [colorsList, setColorsList] = useState<Array<string>>([]);

  const [state, dispatch] = useReducer(reducer, {
    red: 123,
    green: 123,
    blue: 123,
  });

  const { red, green, blue } = state;

  const refresh = useCallback(() => {
    console.log("refresh");
    setColorsList([]);
    dispatch({ type: "change_initial" });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={"Home"}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <Text>ColorAdjuster Screen</Text>

      <View style={{ padding: 20 }}>
        <Button title={"Refresh"} onPress={() => refresh()} />
      </View>

      <ColorsList
        colors={colorsList}
        setColors={(v: any) => setColorsList(v)}
      />

      <View style={{ padding: 20 }}>
        <Text
          style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            padding: 30,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Adjust Colors
          {`\nCOLOR SET : rgb(${red},${green},${blue})`}
        </Text>

        <ColorCounter
          onIncrease={() =>
            dispatch({ type: "change_red", payload: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
          }
          color={"Red"}
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({ type: "change_green", payload: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
          }
          color={"Green"}
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
          }
          color={"Blue"}
        />
      </View>
    </View>
  );
};

export default ColorAdjusterScreen;
