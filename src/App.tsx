import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './Components/Util/hooks/useCachedResources'
import useColorScheme from './Components/Util/hooks/useColorScheme'
import Navigation from './Components/RootNavigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar hidden={false} />
      </SafeAreaProvider>
    )
  }
}
