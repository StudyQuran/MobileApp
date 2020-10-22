import * as React from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import Constants from 'expo-constants'

import { View, Text } from '../../Util/Reusable/Themed'
import Colors from '../../Util/constants/Colors'

interface FormData {
  FirstName: string
  LastName: string
  Email: string
  password: string
}

const SignUp = () => {
  const { control, handleSubmit, errors } = useForm<FormData>({
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      password: ''
    }
  })
  const onSubmit = (formData: object) => {
    console.log(formData)
  }
  console.log(errors)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>First Name</Text>
        <Controller
          name='FirstName'
          control={control}
          render={(props) => <TextInput {...props} style={styles.input} onChangeText={() => props.onChange} />}
        />
      </View>
      <View>
        <Text style={styles.label}>Last Name</Text>
        <Controller
          name='LastName'
          control={control}
          render={(props) => <TextInput {...props} style={styles.input} onChangeText={() => props.onChange} />}
        />
      </View>
      <View style={styles.button}>
        <Button title='Submit' color={Colors.theme.color} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  label: {
    margin: 20,
    marginLeft: 0
  },
  button: {
    marginTop: 40,
    height: 40,
    borderRadius: 4
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4
  }
})
