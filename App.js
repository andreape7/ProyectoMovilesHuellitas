import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import SearchScreen from './screens/SearchScreen';
import CategoryProductsScreen from './screens/CategoryProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomHeaderTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>HUELLITAS</Text>
    <FontAwesome5 name="paw" size={24} color="black" style={{ marginLeft: 10 }} />
  </View>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Pantalla Principal"
      component={HomeScreen} options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategoryProducts"
      component={CategoryProductsScreen}
      options={({ route }) => ({ title: route.params.categoryTitle })}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={({ route }) => ({ title: route.params.productTitle })}
    />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={UserScreen} options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cart"
      component={CartScreen} options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favorite"
      component={FavoriteScreen} options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen} options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'magnify' : 'magnify';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'User') {
          iconName = focused ? 'account' : 'account-outline';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: {
        backgroundColor: '#f0f0f0',
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
    <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
    <Tab.Screen name="Cart" component={CartStack} options={{ headerShown: false }} />
    <Tab.Screen name="Favorite" component={FavoriteStack} options={{ headerShown: false }} />
    <Tab.Screen name="User" component={UserStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerActiveTintColor: '#009EE8',
      itemStyle: { marginVertical: 5 },
      headerShown: true,
      headerTitle: () => <CustomHeaderTitle />,
      headerStyle: {
        backgroundColor: '#87CEFA',
      },
      headerTintColor: '#fff',
    }}
  >
    <Drawer.Screen name="Contactanos" component={TabNavigator} />
    <Drawer.Screen name="Sobre Nosotros" component={TabNavigator} />
    <Drawer.Screen name="Notificaciones" component={TabNavigator} />
    <Drawer.Screen name="Preguntas Frecuentes" component={TabNavigator} />
    <Drawer.Screen name="Terminos y Condiciones" component={TabNavigator} />
  </Drawer.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Drawer" component={DrawerNavigator} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default App;
