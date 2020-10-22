import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../../Util/constants/Colors'
import useColorScheme from '../../Util/hooks/useColorScheme'
import { AuthParamList } from '../../../../types'
import SignUp from '../../Screens/Auth/SignUp'
import SignIn from '../../Screens/Auth/SignIn'
import GetStarted from '../../Screens/Auth/GetStarted'

const AuthNavigator = () => {
  const Auth = createStackNavigator<AuthParamList>()
  return (
    <Auth.Navigator initialRouteName='GetStarted'>
      <Auth.Screen name='GetStarted' component={GetStarted}></Auth.Screen>
      <Auth.Screen name='SignUp' component={SignUp}></Auth.Screen>
      <Auth.Screen name='SignIn' component={SignIn}></Auth.Screen>
    </Auth.Navigator>
  )
}

export default AuthNavigator
