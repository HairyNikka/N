import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import ContactScreen from "./components/ContactScreen";
import AboutScreen from "./components/AboutScreen";
import JsonScreen from "./components/JsonScreen";
import ClockScreen from "./components/ClockScreen";
import InsertDataScreen from "./components/InsertDataScreen"
import PostDataScreen from "./components/PostDataScreen"
import UpdateScreen from "./components/UpdateScreen"
import DeleteScreen from "./components/DeleteScreen"
import SearchScreen from "./components/SearchScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
          <Stack.Screen
          name="Json"
          component={JsonScreen}
        />
        <Stack.Screen
          name="Clock"
          component={ClockScreen}
        />
        <Stack.Screen
          name="Post Data"
          component={PostDataScreen}
        />
        <Stack.Screen
          name="Insert Data"
          component={InsertDataScreen}
        />
        <Stack.Screen
          name="Update Data"
          component={UpdateScreen}
        />
        <Stack.Screen
          name="Delete Data"
          component={DeleteScreen}
        />
                <Stack.Screen
          name="Search Data"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}