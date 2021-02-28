
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage'

function CompaniesLogin(props) {
  global.DATA=[]
  var keyss=[]
  database().ref('/Companies').once("value").then(snapshot=>{
      var result = snapshot.val();
      var keys=Object.entries(result)
      for (var i=0;i<keys.length;i++){
          keyss.push(keys[i][1])
      }
      for (var i=0;i<keyss.length;i++){
        global.DATA.push(Object.values(keyss[i]))
    }
      console.log(global.DATA)
  })

  const verify=()=>{
    for (var i=0;i<global.DATA.length;i++){
        if(global.DATA[i][1]==pass && global.DATA[i][7]==name){
            console.log("found Company")
            props.navigation.navigate("Companies")
            break
        }
  }
  getData()
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@COMPANY');
      console.log(jsonValue)
      global.result = JSON.parse(jsonValue);
      console.log(global.result) 
    } catch(e) {
      console.log(e)
    } 
  }
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white",paddingTop:50 }}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Company Login</Text>
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
      <View style={{ margin: 20, width: 110}}>
        <Button color="#00b8e6" onPress={()=> props.navigation.navigate("CompaniesSignup")}  title="Signup"></Button>
      </View>
      </View>
    )
}
 
    

export default CompaniesLogin;