import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyleButton from './styleButton'
import styles from './styles'
const Frame = ({Name,Price,ImageUrl,taglineCTA}) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={ImageUrl}
        style={styles.image}></ImageBackground>
        <View style={styles.titles}>
          <Text style={styles.title}>{Name}</Text>
          <Text style={styles.subTitle}>{Price}{' '}
          <Text style={styles.Cta}>{taglineCTA}</Text>

          </Text>
       
        </View>
       <View style={styles.buttonContainer}>
       <StyleButton type="primary"/>
        <StyleButton type="secondary"/>
       </View>

      </View>
    )
}

export default Frame
