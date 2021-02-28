
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
// import AsyncStorage from '@react-native-async-storage/async-storage'

function AdminLogin(props) {
  const verify=()=>{
    database().ref('/Admin/').once('value').then(snapshot => {
    const check=snapshot.val()
    if(check.user.name===name && check.user.pass===pass){
      console.log("You are the Admin")
      props.navigation.navigate("Admin")
    }
})}

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white",paddingTop:50 }}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Admin Login</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ margin: 20, width: 110}}>
        <Button color="#00b8e6" onPress={()=>verify()}  title="Login"></Button>
      </View>
      </View>
    )
}

export default AdminLogin;