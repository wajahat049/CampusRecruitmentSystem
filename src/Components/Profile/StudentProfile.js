import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import {connect } from "react-redux"
import Students from '../Dashboard/Students';


function Profile(props) {

    return (

        <View style={{ backgroundColor: 'white', width: "100%" }}>
            <Image source={{uri:"https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"}} style={{ width: "60%", height: 200, marginLeft: 70,marginBottom:50,marginTop:30 }} />
            <View style={{backgroundColor:'#00b8e6',marginBottom:100,padding:30}}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,}}>Name : { (props.Student.Name)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3, }}>Email : { (props.Student.Email)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Qualification : { (props.Student.Qualification)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Field : { (props.Student.Field)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Age : { (props.Student.Age)}</Text>
            </View>
        </View>
    );
}

function mapStateToProps(state) {
  return {
      Student:state.Student
  }
}


 
export default connect(mapStateToProps)(Profile)
