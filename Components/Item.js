import React, { useState } from 'react';
import {  SafeAreaView , Text, View, StyleSheet} from 'react-native';

export default function Item() {
    return(
    <View style={styles.card}>
        <Text>www</Text>
    </View>
    )
    
}

const styles = StyleSheet.create({
    card:{
        
        position:'relative',
        width:'90%',
        marginTop:12,
        height:64,
        backgroundColor: '#fff',
        borderRadius:10,
        // add shado -- ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        // add shado -- android
        elevation: 2
    }

})