import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AuthParamList } from '../../../../types'
import { View, Text } from '../../Util/Reusable/Themed'

const GetStarted = ({ navigation }: StackScreenProps<AuthParamList, 'GetStarted'>) => {
  return (
    <View style={styles.container}>
      <Text>Get Started Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    padding: 10
  }
})
