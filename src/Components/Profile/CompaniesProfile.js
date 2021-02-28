import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Profile(props) {
  const [info,setinfo]=useState([]);
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@COMPANY');
          console.log(jsonValue)
          global.result = JSON.parse(jsonValue);
          setinfo(global.result)
          console.log(info)
        } catch(e) {
          console.log(e)
        } 
      }
      getData();

    return (

        <View style={{ backgroundColor: 'white', width: "100%" }}>
            {/* <Image source={require("../Images/background.png")} style={{ width: "100%", height: 200, borderColor: 'red', borderWidth: 2, backgroundColor: 'white' }} /> */}
            <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/5acb30324eddec2d1ca78b05/1524568136233-M39GRQEQMHBC0I7I424O/ke17ZwdGBToddI8pDm48kMKmrKmA4BFd2y8C5yd-0E17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaMpZzzSvk8P7rrRFzcoqX07PFW5ZV2BHFQdNLhdOVyHM2VVD1PZkMIgBmj9Fhn_2/Company+Product+Icon+Blue+2.png?format=1000w"}} style={{ width: "60%", height: 200, marginLeft: 70,marginBottom:40,marginTop:20 }} />
            <View style={{backgroundColor:'#00b8e6',marginBottom:100,padding:30}}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {JSON.stringify(info.Name)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {JSON.stringify(info.email)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Company : {JSON.stringify(info.company)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Job : {JSON.stringify(info.job)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Experience : {JSON.stringify(info.experience)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Salary : {JSON.stringify(info.salary)}</Text>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Description : {JSON.stringify(info.description)}</Text>

            </View>
        </View>
    );
}

export default Profile