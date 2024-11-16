import { View, Button, TouchableOpacity } from "react-native";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "../Screens/HomeScreen";
import FavScreen from "../Screens/FavScreen";
import DetailScreen from "../Screens/DetailScreen";
import HeaderLeft from "../component/HeaderLeft";
import HeaderRight from "../component/HeaderRight";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Stacks = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerTitleAlign: "center",
          // headerLeft: HeaderLeft,
          // headerRight: HeaderRight,
        }
      }
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "Titles" }}
      />
    </Stack.Navigator>
  );
};

const FavRoute = ({ navigation, route }) => {
  return <FavScreen />;
};

const MyComponent = ({ theme }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Home",
      title: "home",
      focusedIcon: "home",
      unfocusedIcon: "home-variant",
    },
    {
      key: "Fav",
      title: "Favorites",
      focusedIcon: "star-circle",
      unfocusedIcon: "star-circle-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Fav: FavRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
export default function Index() {
  return <MyComponent />;
}
