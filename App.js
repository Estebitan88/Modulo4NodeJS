import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListaLaptops } from "./screens/ListaLaptops";

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen name="LaptopsListNav" component={ListaLaptops} />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
