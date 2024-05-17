import { StyleSheet, Text, View } from "react-native-web";
import { Slot, Stack } from "expo-router";

const rootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default rootLayout;
