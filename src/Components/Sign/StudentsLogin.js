
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import {changeisstudent} from "../../Store/action/index"
import {connect } from "react-redux"
// import Students from "../Dashboard/Students"


function StudentsLogin(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [allstudents,setAllstudents]=useState([])
  database().ref('/Students').once("value").then(snapshot=>{
      setAllstudents( Object.values(snapshot.val()))
  })

  const verify=()=>{
  
    for (var i=0;i<allstudents.length;i++){
        if(allstudents[i].Name==name && allstudents[i].Pass==pass){
            console.log("found Student")
            props.changeisstudent(allstudents[i])
            ToastAndroid.show("Login successfully",ToastAndroid.SHORT)
            props.navigation.navigate("Students")
            break
        
            
        }
        else{
          ToastAndroid.show("Incorrect email or password",ToastAndroid.SHORT)

          
        }
  }

}

 
    return(
     
      <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:"75%",marginTop:"22%" }}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Student Login</Text>
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


function mapStateToProps(state) {
  return {
      Student:state.Student
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisstudent:(Student)=>dispatch(changeisstudent(Student))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(StudentsLogin)
