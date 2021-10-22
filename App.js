import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  React.useEffect(() => {
    async function main() {
      const [r1, r2] = await Promise.all([
        Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY),
        MediaLibrary.requestPermissionsAsync(true),
      ]);
      console.log({ r1, r2 });
    }
    main();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
