import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import NotFoundScreen from './Screens/NotFoundScreen'
import { RootStackParamList } from '../../types'
import MainApp from './Stacks/MainApp/BottomTabNavigator'
import LinkingConfiguration from './Util/LinkingConfiguration'
import AuthNavigator from './Stacks/Auth/AuthNavigator'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const Stack = createStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='MainApp' component={MainApp} /> */}
        <Stack.Screen name='Auth' component={AuthNavigator} />
        <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
