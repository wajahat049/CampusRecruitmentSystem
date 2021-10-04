import React from 'react';
import {View,Text,ImageBackground,StyleSheet,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Components/Home"
import Admin from "../Components/Dashboard/Admin"
import Students from "../Components/Dashboard/Students"
import Companies from "../Components/Dashboard/Companies"
import Login from "../Components/Sign/AdminLogin"
import AdminSignup from "../Components/Sign/AdminSignup"
import StudentsSignup from "../Components/Sign/StudentsSignup"
import CompaniesSignup from "../Components/Sign/CompaniesSignup"
import AdminLogin from "../Components/Sign/AdminLogin"
import StudentsLogin from "../Components/Sign/StudentsLogin"
import CompaniesLogin from "../Components/Sign/CompaniesLogin"
import AdminToggle from "../Components/Sign/Admintoggle"
import Studenttoggle from "../Components/Sign/Studenttoggle"
import Companytoggle from "../Components/Sign/Companytoggle"
import CompaniesInfo from "../Components/Info/CompaniesInfo"
import StudentsInfo from "../Components/Info/StudentsInfo"
import StudentProfile from "../Components/Profile/StudentProfile"
import CompaniesProfile from "../Components/Profile/CompaniesProfile"
import CompanyHire from "../Components/Apply-and_Hire/Company_hire_student"
import StudentRequest from "../Components/Apply-and_Hire/Student_Apply_to_job"





const Stack = createStackNavigator();
const Nav=()=> {
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Students" component={Students} />
          <Stack.Screen name="Companies" component={Companies} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AdminSignup" component={AdminSignup} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} />
          <Stack.Screen name="StudentsLogin" component={StudentsLogin} />
          <Stack.Screen name="CompaniesLogin" component={CompaniesLogin} />
          <Stack.Screen name="StudentsSignup" component={StudentsSignup} />
          <Stack.Screen name="CompaniesInfo" component={CompaniesInfo} />
          <Stack.Screen name="CompaniesSignup" component={CompaniesSignup} />
          <Stack.Screen name="StudentsInfo" component={StudentsInfo} />
          <Stack.Screen name="StudentProfile" component={StudentProfile} />
          <Stack.Screen name="CompaniesProfile" component={CompaniesProfile} />
          <Stack.Screen name="CompanyHire" component={CompanyHire} />
          <Stack.Screen name="StudentRequest" component={StudentRequest} />
          <Stack.Screen name="AdminToggle" component={AdminToggle} />
          <Stack.Screen name="Studenttoggle" component={Studenttoggle} />
          <Stack.Screen name="Companytoggle" component={Companytoggle} />



        </Stack.Navigator>
      </NavigationContainer>
    )
    
}
export default Nav;