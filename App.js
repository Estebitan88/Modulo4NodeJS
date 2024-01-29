import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListaLaptops } from "./screens/ListaLaptops";
import { LaptopsForm } from "./screens/LaptopsForms";

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="LaptopsListNav">
        <StackContacts.Screen name="LaptopsListNav" component={ListaLaptops} />
        <StackContacts.Screen name="LaptosFormNav" component={LaptopsForm} />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
