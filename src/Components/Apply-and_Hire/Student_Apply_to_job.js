import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";

import {connect } from "react-redux"
import { Button } from 'react-native-paper';




function Student_apply_to_job(props){
  const [info, setinfo] = useState([]);
  var email=props.Company.email
  var splitEmail=email.split("@")
  // console.log(splitEmail[0])
  database().ref(`/Companies/${splitEmail[0]}gmail/Requests`).once("value").then(snapshot=>{
      // console.log(snapshot.val())
    var key=snapshot.val()
    if(key!=null){
    setinfo(Object.values(key))}
  }
    )



    return (
      <>
      <FlatList
      data={info}
      renderItem={(ele)=>{
     
        if(ele!=[]){
        return(
          <>
      <View key={ele.index} style={{borderColor:"black",borderWidth:5}}>
        <Text style={{ fontSize: 16 }}>Company Name:    {ele.item.Name}</Text>
                <Text style={{ fontSize: 16, }}>Email:   {ele.item.Email}</Text>
                <Text style={{ fontSize: 16, }}>Job: {ele.item.job}</Text>
                <Text style={{ fontSize: 16, }}>Experience:   {ele.item.experience}</Text>
                <Text style={{ fontSize: 16, }}>Salary:   {ele.item.salary}</Text>
                <Text style={{ fontSize: 16, }}>Description:   {ele.item.description}</Text>
                <View style={{justifyContent:"space-between"}}>
                <Button style={{margin:5}}  mode="contained">Accept</Button>
                <Button style={{margin:5}} mode="contained">Refuse</Button>
                </View>



      </View>
      </>
      )}
      else{
        return (
          <View style={{backgroundColor:"'#00b8e6'"}}>
            <Text style={{fontSize:20,color:"white"}}>No Job Requests</Text>
          </View>
        )
      }


      }}
      keyExtractor={element => element.Email}

    />
</>
    );
    

}




function mapStateToProps(state) {
    return {
        Company:state.Company
    }
  }
  

   
  export default connect(mapStateToProps)(Student_apply_to_job)
  