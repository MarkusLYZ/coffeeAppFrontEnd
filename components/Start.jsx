import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Start() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.FULLBLACK }}>
      <Image
        style={{ width: "100%", height: 536 }}
        source={require("./../assets/images/startScreen.png")}
      />
      <Text style={styles.mainDescription}>
        Fall in Love with Coffee in Blissful Delight!
      </Text>
      <Text style={styles.subDescription}>
        Welcome to our cozy coffee corner, where every cup is a delight for you.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ fontFamily: "sora-bold", color: Colors.WHITE, fontSize: 18 }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainDescription: {
    color: Colors.WHITE,
    fontFamily: "sora-medium",
    fontSize: 32,
    marginTop: -80,
    paddingHorizontal: 15,
    textAlign: "center",
    lineHeight: 45,

    textShadowColor: "rgba(255, 255, 255, 0.4)", // Adjust color and opacity
    textShadowOffset: { width: 2, height: 2 }, // Horizontal and vertical shadow offset
    textShadowRadius: 4, // Blur radius
  },
  subDescription: {
    fontFamily: "sora",
    fontSize: 15,
    paddingTop: 12,
    paddingHorizontal: 15,
    color: Colors.DARKGRAY,
    textAlign: "center",
  },
  button: {
    borderRadius: 99,
    backgroundColor: Colors.BROWN,
    marginTop: "10%",
    padding: 15,
    alignItems: "center",
  },
});
