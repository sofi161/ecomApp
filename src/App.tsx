import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import BottomTab from './components/BottomTab';
import TopTab from './components/TopTab';
import ProductDetailScreen from './screens/ProductDetailScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { useState } from 'react';

export type rootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Profile: undefined;
  BottomTabs: undefined;
  TopTabs: undefined;
  ProductDetails: {
    products: any;
  };
};

const Stack = createNativeStackNavigator<rootStackParamList>();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="TopTabs" component={TopTab} /> */}
        <Stack.Screen name="BottomTabs" component={BottomTab} />
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  if (isUserLoggedIn) {
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
