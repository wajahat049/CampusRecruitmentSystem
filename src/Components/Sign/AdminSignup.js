import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
// import {Picker} from "@react-native-picker/picker";


function AdminSignup() {
  // console.log("sign",props.navigation)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const save_data=(props)=>{
    let user={
        name, email , pass
    }
    database().ref(`/Admin/`).update({user})
  }

  return (
    
    <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:"75%",marginTop:"15%"}}>
      <View>
        <Text style={{ fontSize: 50, color: "#00b8e6", fontWeight: 'bold',marginBottom:10 }}>SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 10 }}>
        <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#00b8e6",width:"80%", margin:10}}>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 10 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default AdminSignup;