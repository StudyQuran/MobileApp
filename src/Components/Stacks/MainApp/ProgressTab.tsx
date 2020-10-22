import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { Button } from 'react-native'
import * as React from 'react'

import Colors from '../../Util/constants/Colors'
import useColorScheme from '../../Util/hooks/useColorScheme'
import ProgressScreen from '../../Screens/Progress/ProgressScreen'
import { ProgessParamList } from '../../../../types'
import AddProgressScreen from '../../Screens/AddProgress/AddProgressScreen'

const ProgressStack = createStackNavigator<ProgessParamList>()

function ProgressTabNavigator({ navigation }: StackScreenProps<ProgessParamList, 'TrackProgessScreen'>) {
  const colorScheme = useColorScheme()
  return (
    <ProgressStack.Navigator>
      <ProgressStack.Screen
        name='TrackProgessScreen'
        component={ProgressScreen}
        options={{
          headerTitle: 'Track Progess',
          headerRight: () => (
            <Button title='Add' color={Colors[colorScheme].tint} onPress={() => navigation.navigate('AddProgress')} />
          )
        }}
      />
      <ProgressStack.Screen
        name='AddProgress'
        component={AddProgressScreen}
        options={{
          headerTitle: 'Add Class/Student'
        }}
      />
    </ProgressStack.Navigator>
  )
}

export default ProgressTabNavigator
