import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import Colors from '../../Util/constants/Colors'
import useColorScheme from '../../Util/hooks/useColorScheme'
import { MainAppParamList } from '../../../../types'
import ProgressTabNavigator from './ProgressTab'
import ProfileTabNavigator from './ProfileTab'

const MainApp = createBottomTabNavigator<MainAppParamList>()
const colorScheme = useColorScheme()
export default function MainAppNavigator() {
  return (
    <MainApp.Navigator initialRouteName='Progress' tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <MainApp.Screen
        name='Progress'
        component={ProgressTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='progress-clock' color={color} />
        }}
      />
      <MainApp.Screen
        name='Profile'
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='face-profile' color={color} />
        }}
      />
    </MainApp.Navigator>
  )
}

// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
}
