import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import {connect } from "react-redux"



function Profile(props) {

    return (

        <View style={{ backgroundColor: 'white', width: "100%" }}>
           
            <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/5acb30324eddec2d1ca78b05/1524568136233-M39GRQEQMHBC0I7I424O/ke17ZwdGBToddI8pDm48kMKmrKmA4BFd2y8C5yd-0E17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaMpZzzSvk8P7rrRFzcoqX07PFW5ZV2BHFQdNLhdOVyHM2VVD1PZkMIgBmj9Fhn_2/Company+Product+Icon+Blue+2.png?format=1000w"}} style={{ width: "60%", height: 200, marginLeft: 70,marginBottom:40,marginTop:20 }} />
            <View style={{backgroundColor:'#00b8e6',marginBottom:100,padding:30}}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3 }}>Name : {(props.Company.Name)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Email : {(props.Company.email)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Company : {(props.Company.company)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Job : {(props.Company.job)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Experience : {(props.Company.experience)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Salary : {(props.Company.salary)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 3,  }}>Description : {(props.Company.description)}</Text>

            </View>
        </View>
    );
}
function mapStateToProps(state) {
  return {
      Company:state.Company
  }
}



 
export default connect(mapStateToProps)(Profile)
