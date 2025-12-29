import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import BottomTab from './components/BottomTab';
import TopTab from './components/TopTab';
import ProductDetailScreen from './screens/ProductDetailScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { useState } from 'react';
import CategoriesScreen from './screens/CategoriesScreen';

export type rootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Categories: {
    category?: any | undefined;
  };
  Profile: undefined;
  BottomTabs: undefined;
  TopTabs: undefined;
  ProductDetails: {
    products: any;
  };
};

const Stack = createNativeStackNavigator<rootStackParamList>();

const AuthStack = ({ setIsUserLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {props => (
          <LoginScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {props => (
          <SignupScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const AppStack = ({ category }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="TopTabs" component={TopTab} /> */}
      <Stack.Screen name="BottomTabs" component={BottomTab} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="Categories">
        {props => <CategoriesScreen {...props} category={category} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <AppStack />
      ) : (
        <AuthStack setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
