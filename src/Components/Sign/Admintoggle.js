import * as React from 'react';
import { Button } from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import { View, Text,TextInput,Alert } from 'react-native';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';


const AdminToggle = (props) => {
    console.log("toggle",props.navigation)
    const [show,setShow]=React.useState("signup")
   
    return (
       <View>
           {show=="signup"?<AdminSignup navigation={props.navigation}></AdminSignup>:< AdminLogin navigation={props.navigation}></AdminLogin>}
<View style={{flexDirection:"row",position:"absolute",marginTop:"165%"}}>
<Button style={{width:"50%",padding:"3%"}} color="deepskyblue" icon="book" mode="contained" onPress={() => setShow("signup")}>
    Signup
  </Button>
  <Button style={{width:"50%",padding:"3%"}} color="deepskyblue" icon="book" mode="contained" onPress={() => setShow("login")}>
    Login
  </Button>
  </View>
       </View>
    );
};

export default AdminToggle;