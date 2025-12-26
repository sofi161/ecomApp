import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import BottomTab from './components/BottomTab';
import TopTab from './components/TopTab';
import ProductDetailScreen from './screens/ProductDetailScreen';

export type rootStackParamList = {
  Home: undefined;
  Profile: undefined;
  BottomTabs: undefined;
  TopTabs: undefined;
  ProductDetails: undefined;
};

const Stack = createNativeStackNavigator<rootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="TopTabs" component={TopTab} /> */}
        <Stack.Screen name="BottomTabs" component={BottomTab} />
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
