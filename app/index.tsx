import { Link } from "expo-router";

import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "../app.json";
import Index from "./src/navigation/index";

export default function Main() {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
