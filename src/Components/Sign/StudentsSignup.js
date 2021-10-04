

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

  // database().ref("/Students/student1gmail").update({Name:"Student 1", Email:"student1@gmail.com" , Pass:"stud1" ,Qualification:"undergraduate", Field:"Computer", Age:20})
  // database().ref("/Students/student2gmail").update({Name:"Student 2", Email:"student2@gmail.com" , Pass:"stud2" ,Qualification:"undergraduate", Field:"Computer", Age:21})
  // database().ref("/Students/student3gmail").update({Name:"Student 3", Email:"student3@gmail.com" , Pass:"stud3" ,Qualification:"undergraduate", Field:"Computer", Age:22})
  // database().ref("/Students/student4gmail").update({Name:"Student 4", Email:"student4@gmail.com" , Pass:"stud4" ,Qualification:"undergraduate", Field:"Computer", Age:23})
  // database().ref("/Students/student5gmail").update({Name:"Student 5", Email:"student5@gmail.com" , Pass:"stud5" ,Qualification:"undergraduate", Field:"Computer", Age:24})
  


  const save_data=()=>{
    var emailSplit=Email.split("@")

    database().ref(`/Students/${emailSplit[0]}`).update({Name, Email , Pass ,Qualification, Field, Age})
    
  props.navigation.navigate("StudentsLogin")
  }
  
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold',marginBottom:10 }}>SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#00b8e6",width:"80%", margin:5}}>
        <TextInput value={email} keyboardType={"email-address"} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
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
        <TextInput  value={Age} keyboardType={"numeric"} onChangeText={(e) => setAge(e)} placeholder="Age" />
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