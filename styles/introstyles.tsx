import { StyleSheet } from "react-native";
import { themeColors } from "../utils/themeutils";

export const introStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "space-between", // Pushes body to top/middle and button to bottom
    alignItems: "center",
    paddingVertical: 40,
  },

  body: {
    backgroundColor: themeColors.orange,
    padding: 20,
    borderRadius: 20,
    marginTop: 300, // Moves it down a bit from the top
    opacity: 0.9,

  },

  bodyText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },

  button: {
    backgroundColor: themeColors.orange,
    paddingVertical: 8, // smaller button height
    paddingHorizontal: 20, // keeps it narrow
    borderRadius: 30, // fully rounded
    marginBottom: 30, // spacing from bottom
    alignSelf: "center",
    opacity: 0.9,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
