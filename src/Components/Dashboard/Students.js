
import * as React from 'react';
import { View, Text, Button, TextInput,Alert } from 'react-native';
import {connect } from "react-redux"
import {changeisstudent} from "../../Store/action/index"

function Students(props) {

  const LogOut=()=>{
    props.changeisstudent({})
    props.navigation.navigate("Studenttoggle")
  }


  return (

    <View style={{ alignItems: 'center', justifyContent: 'center',}}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold',marginBottom:30 }}>Student Page</Text>
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("StudentProfile")} title="Profile"></Button>
      </View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("CompaniesInfo")} title="Companies  Info"></Button>
      </View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("CompanyHire")} title="Job Offers"></Button>
      </View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>Alert.alert(
      "Delete Student",
      "Are you sure you want to Log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => LogOut() }
      ]
    )} title="Log out"></Button>
      </View>
    </View>
    
    </View>
  );
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

 
export default connect(mapStateToProps, mapDispatchToProps)(Students)

