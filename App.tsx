import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const height = Dimensions.get('screen').width * 0.7;

export default function App() {
  const [ num, setNum ] = useState<number>(0); 
  const [ img, setImg ] = useState<string>();

  useEffect( () => {
     const catOrDog = num >= 6 ? 'cat' : 'dog';
     fethImage(catOrDog);
  },[num]);

function change(handle? : string){
      if(handle){
        const catOrDog = num >= 6 ? 'cat' : 'dog';
        if(handle === catOrDog ){
          Alert.alert('Correct')
        }else{
          Alert.alert('Incorrect')
        }
      }
    const min = Math.ceil(0);
    const max = Math.floor(11);
    setNum(Math.floor(Math.random() * (max - min + 1)) + min);
}

function fethImage(a : string){ 
const carai = num >= 6 ? `dog` : `cat`;  
fetch(`https://api.the${a}api.com/v1/images/search`)
   .then( resp => resp.json())
   .then( catOrDog => setImg(catOrDog[0].url ) ) 
   .catch( () => Alert.alert('Erro') )
}

  return (
    <View style={styles.container}>
      <View style = {styles.header} >
        <Text style = {styles.title}> Cat or Dog </Text>
      </View>
      <ImageBackground
        source={{
          uri: img
        }}
        style={{ height: height, justifyContent:"center", alignItems:"center" }}
      >    
      </ImageBackground>
      <View style={styles.buttonscard}>
        <TouchableOpacity onPress = {() => change('cat') } style = {styles.buttons} >
          <MaterialCommunityIcons name="cat" size={54} color="black" />
          <Text>Cat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => change('dog')} style = {styles.buttons}>
          <MaterialCommunityIcons name="dog" size={54} color="black" />
          <Text>Dog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header:{
    alignItems:"center"
  },
  title:{
    fontSize:20
  },
  buttonscard: {
    flexDirection: 'row',
    justifyContent:"center"
  },
  buttons:{
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:20
  }
});
