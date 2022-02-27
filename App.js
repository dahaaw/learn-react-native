import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from './src/const/colors';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';

const Huhu = () => {
  return  (<View><Text>Hamdan</Text></View>)
}

const Detail = () => {
  return  (<View><Text>Detail</Text></View>)
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Board' component={OnBoardScreen}/>
          <Stack.Screen name='Home' component={BottomNavigator}/>
          <Stack.Screen name='Detail' component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}