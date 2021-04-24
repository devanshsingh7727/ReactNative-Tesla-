import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const styleButton = ({type}) => {
    const backgroundColor=type==='primary'?'#171A20CC':'#FFFFFFA6'
    const textColor=type==='primary'?'white':'#171A20'


    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button,{backgroundColor}]}
            onPress={()=>{
                console.log(`button pressed ${type}`);
            }}>
                <Text style={styles.text,{color:textColor}}>
                    Custom Order
                </Text>
            </Pressable>
        </View>
    )
}

export default styleButton
 
const styles=StyleSheet.create({
container:{
    width:"100%",
    padding:10,
},
button:{

    height:40,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:20
},
text:{
    fontSize:12,
    fontWeight:500,
    textTransform:'uppercase'
}
})