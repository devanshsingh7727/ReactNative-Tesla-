import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import cars from './cars'
import Frame from './Frame'

const CarsList = () => {
    return (
    //     <View style={styles.container}>
    //     {cars.map((res)=>(
    //   <Frame key={res.name} Name={res.name} Price={res.tagline} ImageUrl={res.image} taglineCTA={res.taglineCTA}/>


    //     ))}
            
    //     </View>
    <View style={styles.container}>
        <FlatList
        data={cars}
        renderItem={({item})=><Frame key={item.name} Name={item.name} Price={item.tagline} ImageUrl={item.image} taglineCTA={item.taglineCTA}/>}
        howsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}

        />
    </View>
    
    )
}

export default CarsList
const styles = StyleSheet.create({
    container: {
      width:"100%",
      
     
    }
    
  });
