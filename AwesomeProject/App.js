import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const App = () => {
  const images = [
    require('./assets/images/slide1.jpeg'),
    require('./assets/images/slide2.jpeg')
  ]
  return (
    <View>
      <SliderBox images={images} />
    </View>
  )
}

export default App