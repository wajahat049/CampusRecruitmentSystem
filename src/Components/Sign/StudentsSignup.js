

import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
// import {Picker} from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';


function StudentsSignUp(props) {
  const Type="Student"
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [quali, setQuali] = useState("");
  const [field, setField] = useState("");
  const [Age, setAge] = useState("");
  const save_data=()=>{
    database().ref(`/Student/`).push({Name, email , pass ,quali, field, Age})
    const value={Name, email , pass ,quali, field, Age}
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@STUDENT', jsonValue)
    } catch (e) {
      console.log("error")
      // saving error
    }
  }
  storeData(value)
  props.navigation.navigate("StudentsLogin")

  }
  
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold',marginBottom:10 }}>SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#00b8e6",width:"80%", margin:5}}>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput value={quali} onChangeText={(e) => setQuali(e)} placeholder="Qualification" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput  value={field} onChangeText={(e) => setField(e)} placeholder="Field" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput  value={Age} onChangeText={(e) => setAge(e)} placeholder="Age" />
      </View>
    <View>
      <View style={{marginTop:10, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default StudentsSignUp;