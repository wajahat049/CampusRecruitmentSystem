import * as React from 'react';
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text,TextInput,Alert } from 'react-native';
import CompanySignUp from './CompaniesSignup';
import CompanyLogin from './CompaniesLogin';



const CompanyToggle = (props) => {
    const [show,setShow]=React.useState("signup")


    return (
        <View>
        {show=="signup"?<CompanySignUp navigation={props.navigation}></CompanySignUp>:<CompanyLogin navigation={props.navigation}></CompanyLogin>}
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

export default CompanyToggle;