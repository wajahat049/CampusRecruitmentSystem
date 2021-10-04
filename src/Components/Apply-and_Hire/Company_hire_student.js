import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";

import {connect } from "react-redux"
import { Button } from 'react-native-paper';




function Company_hire_student(props){
  const [info, setinfo] = useState([]);
  var email=props.Student.Email
  var splitEmail=email.split("@")
  database().ref(`/Student/${splitEmail[0]}gmail/Offers`).once("value").then(snapshot=>{
    var key=snapshot.val()
    if(key!={}){
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
        {/* {console.log("xsxax",ele.item)} */}
        {/* <Text style={{fontSize:10,color:"red"}}>{ele.item}</Text> */}
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
            <Text style={{fontSize:20,color:"white"}}>No Job Offers</Text>
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
        Student:state.Student
    }
  }
  

   
  export default connect(mapStateToProps)(Company_hire_student)
  