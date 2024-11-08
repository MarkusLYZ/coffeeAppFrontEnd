import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Picker } from "@react-native-picker/picker";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <View style={{}}>
      <View style={{ backgroundColor: Colors.BLACK, height: 250 }}>
        <Text
          style={{
            color: Colors.DARKGRAY,
            paddingTop: 80,
            paddingHorizontal: 25,
            fontFamily: "sora",
            fontSize: 16,
          }}
        >
          Location
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={styles.itemStyle}
        >
          <Picker.Item label="Bilzen, Tanjungbalai" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    color: Colors.WHITE,
  },
  itemStyle: {
    fontFamily: "sora", // Custom font name
    fontSize: 18,
  },
});
