import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="auth/login_screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="auth/login_screen" />
      <Stack.Screen name="index" />
      <Stack.Screen name="home/home_screen" />
    </Stack>
  );
}
