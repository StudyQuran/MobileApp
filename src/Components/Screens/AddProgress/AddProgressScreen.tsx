import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { StyleSheet, TextInput, Button } from 'react-native'
import Colors from '../../Util/constants/Colors'

import useColorScheme from '../../Util/hooks/useColorScheme'
import { Text, View } from '../../Util/Reusable/Themed'

const colorScheme = useColorScheme()
const AddProgressScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.centeredView}>
      <TextInput placeholder='Place Holder' style={styles.textInput}></TextInput>
      <Button
        title='Done'
        onPress={() => {
          navigation.goBack()
        }}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  textInput: {
    backgroundColor: Colors[colorScheme].background,
    color: Colors[colorScheme].text,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default AddProgressScreen
