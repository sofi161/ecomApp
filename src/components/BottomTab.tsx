import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import { Fontisto } from '@react-native-vector-icons/fontisto';
import TopTab from './TopTab';

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Cart') {
            iconName = 'opencart';
          } else {
            iconName = 'nav-icon-grid-a';
          }

          return <Fontisto name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#222222',
        tabBarInactiveTintColor: '#828282',

        // 🔹 TAB BAR STYLE
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 10,
        },

        // 🔹 LABEL STYLE
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Categories"
        component={props => <CategoriesScreen {...props} />}
        options={{ tabBarLabel: 'Categories' }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
