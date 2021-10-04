import * as React from 'react';
import { View, Text, Button, TextInput,Alert } from 'react-native';
import {changeiscompany} from "../../Store/action/index"
import {connect } from "react-redux"

function Companies(props) {

  const LogOut=()=>{
    props.changeiscompany({})
    props.navigation.navigate("Companytoggle")
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:"30%"}}>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold',marginBottom:30 }}>Company Page</Text>
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("StudentsInfo")} title="Students  Info"></Button>
      </View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("CompaniesProfile")} title="Company  Profile"></Button>
      </View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("StudentRequest")} title="Job Requests"></Button>
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
      Company:state.Company
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeiscompany:(Company)=>dispatch(changeiscompany(Company))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Companies)

