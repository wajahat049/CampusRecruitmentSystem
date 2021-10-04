import React from 'react';
import {View,Text,ImageBackground,StyleSheet,TouchableOpacity,Button,Alert} from 'react-native';
import {connect } from "react-redux"
import {changeisuser} from "../../Store/action/index"


const Admin=(props)=> {
  const LogOut=()=>{
    props.changeisuser({})
    props.navigation.navigate("AdminToggle")
  }
  
    return(
      // <AdminNavigationTab >      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View>
          <Text style={{ fontSize: 60, color: '#00b8e6', fontWeight: 'bold',marginBottom:60,textAlign:"center" }}>Welcome   Admin</Text>
        </View>
      <View>
        <View style={{marginTop:20, width:150}}>
        <Button color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("StudentsInfo")} title="Students  Info"></Button>
        </View>
        <View style={{marginTop:20, width:150}}>
        <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>props.navigation.navigate("CompaniesInfo")} title="Companies  Info"></Button>
        </View>
        <View style={{marginTop:20, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>Alert.alert(
        "Log Out",
      "Are you sure you want to Log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => LogOut() }
      ]
    )} title="Log out"/>
      </View>
      </View>
      </View>

  
    )
    
}

function mapStateToProps(state) {
  return {
      User:state.User
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser:(Admin)=>dispatch(changeisuser(Admin))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
