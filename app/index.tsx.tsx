import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { introStyles } from "../styles/introstyles";

export default function App() {
  return (
    <View style={introStyles.container}>
      <ImageBackground
        style={introStyles.background}
        source={require("../assets/images/laundry.home.jpg")} // Correct path for Expo
        resizeMode="cover" // Ensures it scales nicely
      >
        <View style={introStyles.body}>
          <Text style={introStyles.bodyText}>My Laundry Tracker</Text>
        </View>

        <TouchableOpacity
          style={introStyles.button}
          onPress={() => console.log("Track button pressed")}
        >
          <Text style={introStyles.buttonText}>Track my laundry</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}