import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  useFonts({
    sora: require("./../assets/fonts/Sora-Regular.ttf"),
    "sora-medium": require("./../assets/fonts/Sora-Medium.ttf"),
    "sora-bold": require("./../assets/fonts/Sora-Bold.ttf"),
  });
  return (
    <>
    
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack></>
  );
}
