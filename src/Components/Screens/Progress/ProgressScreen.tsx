import * as React from 'react'
import { StyleSheet, SectionList, Pressable } from 'react-native'

import Colors from '../../Util/constants/Colors'
import { Text, View } from '../../Util/Reusable/Themed'
import AddProgressionModal from '../AddProgress/AddProgressScreen'
//import useColorScheme from '../hooks/useColorScheme'
const DATA = [
  {
    title: 'Classes',
    data: ['Period 1', 'Period 2', 'Period 3']
  },
  {
    title: 'Students',
    data: ['Sahar', 'Yahya', 'Aleenah']
  }
]
//const colorScheme = useColorScheme()
export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item itemName={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Pressable>
            <Text style={styles.header} lightColor={Colors.light.text} darkColor={Colors.dark.text}>
              {title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  )
}
//lightColor={Colors.light.background} darkColor={Colors.dark.background}
const Item = ({ itemName }: { itemName: string }) => (
  <Pressable style={styles.item}>
    <Text lightColor={Colors.light.text} darkColor={Colors.dark.text}>
      {itemName}
    </Text>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderBottomColor: 'green',
    borderWidth: 2
  }
})
