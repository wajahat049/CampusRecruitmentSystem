
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import {changeiscompany} from "../../Store/action/index"
import {connect } from "react-redux"
import Companies from "../Dashboard/Companies"



function CompaniesLogin(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [allcompanies,setAllcompanies]=useState({})

  database().ref('/Companies').once("value").then(snapshot=>{
    setAllcompanies( Object.values(snapshot.val()))
  })

  const verify=()=>{
    for (var i=0;i<allcompanies.length;i++){
        if(allcompanies[i].pass==pass && allcompanies[i].Name==name){
          props.changeiscompany(allcompanies[i])
          console.log("found Comapny")
          ToastAndroid.show("Login successfully",ToastAndroid.SHORT)
          break
           
        }
        else{
          ToastAndroid.show("Incorrect email or password",ToastAndroid.SHORT)
        }
  }
}
if(props.Company.Name==undefined){
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:"20%" }}>
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
      
      </View>
    )}

    else{
      return(
      <Companies navigation={props.navigation}></Companies>
      )
    }
}
 
    
function mapStateToProps(state) {
  return {
      Company:state.Company
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeiscompany:(Company)=>dispatch(changeiscompany(Company))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesLogin)
