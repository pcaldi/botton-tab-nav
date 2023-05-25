import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarHideOnKeyboard: true, // Quando o teclado abre ele oculta o menu.
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
