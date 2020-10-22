import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import ProfileScreen from '../../Screens/Profile/ProfileScreen'
import { ProfileParamList } from '../../../../types'

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileTabNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerTitle: 'Profile' }} />
    </ProfileStack.Navigator>
  )
}

export default ProfileTabNavigator
