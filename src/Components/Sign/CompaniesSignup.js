import * as React from 'react';
import { View, Text, Button, TextInput, } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'


function CompaniesSignUp(props) {
  const Type = "Company"
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");

  // database().ref(`/Companies/company1gmail`).update({ Name:"Company1", email:"Company1@gmial.com", pass:"Comp1", job:"Developer", salary:50000, description:"good web developer", experience:"1 year" })
  // database().ref(`/Companies/company2gmail`).update({ Name:"Company2", email:"Company2@gmial.com", pass:"Comp2", job:"Developer", salary:60000, description:"good web developer", experience:"1 year" })
  // database().ref(`/Companies/company3gmail`).update({ Name:"Company3", email:"Company3@gmial.com", pass:"Comp3", job:"Developer", salary:70000, description:"good web developer", experience:"1 year" })
  // database().ref(`/Companies/company4gmail`).update({ Name:"Company4", email:"Company4@gmial.com", pass:"Comp4", job:"Developer", salary:80000, description:"good web developer", experience:"1 year" })
  // database().ref(`/Companies/company5gmail`).update({ Name:"Company5", email:"Company5@gmial.com", pass:"Comp5", job:"Developer", salary:90000, description:"good web developer", experience:"1 year" })


  const save_data = () => {
    var emailSplit=Email.split("@")

    database().ref(`/Companies/${emailSplit[0]}`).update({ Name, email, pass, job, salary, description, experience })
    
  props.navigation.navigate("CompaniesLogin")

  }

  return (
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:"10%" }}>
        <View>
          <Text style={{ fontSize: 40, color: '#00b8e6', fontWeight: 'bold', bottom:11 }}>SignUp</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Company Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={email} keyboardType={"email-address"} onChangeText={(e) => setEmail(e)} placeholder="Email" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={job} onChangeText={(e) => setJob(e)} placeholder="Job Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={description} onChangeText={(e) => setDescription(e)} placeholder="Job Description" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={salary} onChangeText={(e) => setSalary(e)} placeholder="Salary" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={experience} onChangeText={(e) => setExperience(e)} placeholder="Experience" />
        </View>
        <View>
          <View style={{ width: 150 }}>
            <Button color="#00b8e6" style={{ fontSize: 30 }} onPress={() => save_data()} title="Signup"></Button>
          </View>
        </View>

      </View>
  );
}

export default CompaniesSignUp;
