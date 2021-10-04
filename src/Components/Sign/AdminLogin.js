
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
// import AsyncStorage from '@react-native-async-storage/async-storage'
import {connect } from "react-redux"
import {changeisuser} from "../../Store/action/index"
import Admin from "../Dashboard/Admin"



function AdminLogin(props) {
  console.log(props.navigation)
  const verify=()=>{
    database().ref('/Admin/').once('value').then(snapshot => {
    const check=snapshot.val()
    if(check.user.name===name && check.user.pass===pass){
      ToastAndroid.show("You are the Admin",ToastAndroid.SHORT)
      props.changeisuser("Admin")
      props.navigation.navigate("Admin")
    }
})}

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    return(
      <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:"75%",marginTop:"22%" }}>
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
    )}


function mapStateToProps(state) {
  return {
      User:state.User
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser:(User)=>dispatch(changeisuser(User))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
