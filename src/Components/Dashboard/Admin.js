import React from 'react';
import {View,Text,ImageBackground,StyleSheet,TouchableOpacity,Button} from 'react-native';

const Admin=(props)=> {
    return(
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
      </View>
      </View>
    )
    
}
export default Admin;