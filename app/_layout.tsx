import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}/>

      <Stack.Screen
      name="home"
      options={{
        headerShown: true,
        title: "Home"
      }}/>

      <Stack.Screen
      name="track"
      options={{
        headerShown: false,
        title: "Track"
      }}/>

      <Stack.Screen
      name="more"
      options={{
        headerShown: false,
        title: "More"
      }}/>

    </Stack>
  );
}