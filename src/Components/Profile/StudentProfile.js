import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Profile(props) {
  const [info,setinfo]=useState([]);
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@STUDENT');
          console.log(jsonValue)
          global.result = JSON.parse(jsonValue);
          console.log(global.result.Name) 
          setinfo(global.result)
        } catch(e) {
          console.log(e)
        } 
      }
      getData();

    return (

        <View style={{ backgroundColor: 'white', width: "100%" }}>
          {console.log(global.result)}
            {/* <Image source={require("../Images/background.png")} style={{ width: "100%", height: 200, borderColor: 'red', borderWidth: 2, backgroundColor: 'white' }} /> */}
            <Image source={{uri:"https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"}} style={{ width: "60%", height: 200, marginLeft: 70,marginBottom:50,marginTop:30 }} />
            <View style={{backgroundColor:'#00b8e6',marginBottom:100,padding:30}}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {JSON.stringify(info.Name)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {JSON.stringify(info.email)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Qualification : {JSON.stringify(info.quali)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Field : {JSON.stringify(info.field)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Age : {JSON.stringify(info.Age)}</Text>
            </View>
        </View>
    );
}

export default Profile