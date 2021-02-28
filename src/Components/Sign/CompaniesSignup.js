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
  const save_data = () => {
    
    database().ref(`/Companies/`).push({ Name, email, pass, company, job, salary, description, experience })
    const value={Name, email , pass ,company, job, salary, description, experience}
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@COMPANY', jsonValue)
    } catch (e) {
      console.log("error")
      // saving error
    }
  }
  storeData(value)
  props.navigation.navigate("CompaniesLogin")

  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 40, color: '#00b8e6', fontWeight: 'bold', bottom:11 }}>SignUp</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 1 }}>
          <TextInput value={company} onChangeText={(e) => setCompany(e)} placeholder="Company Name" />
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
