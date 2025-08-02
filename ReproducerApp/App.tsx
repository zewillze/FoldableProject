/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Platform,
  SafeAreaView,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const dimension = useWindowDimensions();

  const { width, height } = dimension;
  const info = `Android-API:${Platform.Version}\nwidth: ${width}\n height: ${height}`

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, top: 100 }}>
        <Text style={{ alignSelf: 'center', alignContent: 'center', fontSize: 30 }}>
          {info}
        </Text>
      </View>
    </SafeAreaView>
  );
}



export default App;
