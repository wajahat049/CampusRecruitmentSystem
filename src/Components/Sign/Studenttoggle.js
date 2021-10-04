import * as React from 'react';
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text,TextInput,Alert } from 'react-native';
import StudentSignUp from './StudentsSignup';
import StudentLogin from './StudentsLogin';


const signupRoute = () => <StudentSignUp/>;

const loginRoute = () => <StudentLogin/> ;


const StudentToggle = (props) => {
    const [show,setShow]=React.useState("signup")


    return (
        <View>
           {show=="signup"?<StudentSignUp navigation={props.navigation}></StudentSignUp>:< StudentLogin navigation={props.navigation}></StudentLogin>}
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

export default StudentToggle;