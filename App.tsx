import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoadAssets } from "@/components";
import { InitialNavigator } from "@/routes";
import { fonts } from "@/theme";

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar translucent />
      <InitialNavigator />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
