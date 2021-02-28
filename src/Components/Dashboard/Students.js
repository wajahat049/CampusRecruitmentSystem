
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
function Students(props) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
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
    </View>
    
    </View>
  );
}

export default Students;
