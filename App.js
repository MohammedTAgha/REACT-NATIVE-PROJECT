import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView} from 'react-native';
import Item from './Components/Item.js'
export default function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (text) => {
    setInput(text)
    console.log(text)
    
  }

  const ctaHandler = () => {
    console.log("♦♦♦")
    setText([...text, input])
    setInput('')
  }
  return (
    <SafeAreaView>
       <StatusBar
        animated={true}
        backgroundColor="#33f"
        
        hidden = {false}
         />
    <View style={styles.container}>

      <Text>
        Try editing me! 🎉
        <Text  > add </Text>
      </Text>
      <View style={styles.card}>
      { text.map(i => (<Item ><Text> {i} </Text></Item>))}
      </View>
     

      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          value={input}
          onChangeText={e => handleInputChange(e)}
        />
        <Button title="add new" onPress={() => ctaHandler()}  style={styles.ctaAdd}></Button>
      
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    
  },
  bottom: {
    display:"flex",
    flexDirection:"row",
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 75,
    width: '100%',
    backgroundColor: '#33f',
   
  },
  input: {
    left:0,
    
    width: '75%',
    height: '100%',
    backgroundColor: '#fff',
  },
  staAdd: {
    right:0,
    width: '15%',
    height: '100%',
    backgroundColor: '#fff',
  },
  card: {
    display:'flex',
    
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
   
    
  },
});
