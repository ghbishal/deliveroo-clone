import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {TailwindProvider} from "tailwindcss-react-native";
import "react-native-url-polyfill/auto";
import {RestaurantScreen} from "./screens/RestaurantScreen";
import {Provider} from "react-redux";
import {store} from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* // using readux */}
      <Provider store={store}>
        {/* // not sure if we need TailwindProvider */}
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{presentation: "modal", headerShown: false}}
            /> */}
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
