import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
// import { ErrorBoundary } from "./screens/ErrorScreen/ErrorBoundary"
import Config from "./config"
import { useInitialRootStore } from "./models";
import { AppNavigator } from "./navigators";
import "./i18n"

export default function Native() {

  const { rehydrated } = useInitialRootStore(() => {
    // This runs after the root store has been initialized and rehydrated.

    // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
    // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
    // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
    // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
    // setTimeout(hideSplashScreen, 500)
  })
  console.log("rehydrated", rehydrated)
  if (!rehydrated ) return null

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator />
    {/* <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
