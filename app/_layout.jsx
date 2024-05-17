import { StyleSheet, Text, View } from "react-native-web";
import { Slot } from "expo-router";

const rootLayout = () => {
  return (
    <>
      <Text>You're a NOOB at it.</Text>
      <Slot />
    </>
  );
};

export default rootLayout;
