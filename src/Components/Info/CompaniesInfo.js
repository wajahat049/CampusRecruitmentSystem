import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { DataTable, Provider, Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { connect } from "react-redux"






function CompaniesInfo(props) {
  const [theelement, settheelement] = useState({})
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [info, setinfo] = useState([]);


  const deleteInfo = (uid) => {
    Alert.alert(
      "Delete Student",
      "Are you sure you want to delete this Company data?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => database().ref('/Companies/' + uid).remove().then(hideDialog()) }
      ]
    );



  }

  global.DATA = []
  var keyss = []
  database().ref('/Companies').once("value").then(snapshot => {
    var result = snapshot.val();
    var keys = Object.entries(result)
    for (var i = 0; i < keys.length; i++) {
      var value = keys[i][1]
      value.uid = keys[i][0]
      keyss.push(value)
    }


    setinfo(keyss)
    // console.log(info)
  })

  const onpressFunc = (element) => {
    settheelement(element)
    showDialog()

  }

  const Apply = (element) => {
    var email=props.Student.Email
    var splitEmail=email.split("@")
      database().ref('/Companies/' + element+"/Requests/"+splitEmail[0]).update(props.Student)
      hideDialog()
  
      // database().ref('/Companies/Job_Hiring').push(element)
  
    }

  const renderingItem = (element) => {
    return (
      <TouchableHighlight key={element.index}  onPress={() => onpressFunc(element.item)}>
        <View>

          <DataTable.Row style={{ backgroundColor: "white" }}>
            <DataTable.Cell  >{element.item.Name}</DataTable.Cell>
            <DataTable.Cell >{element.item.job}</DataTable.Cell>
            <DataTable.Cell >{element.item.description}</DataTable.Cell>

          </DataTable.Row>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", textDecorationLine: "underline" }}>Company Information</Dialog.Title>
              <Dialog.Content  >
                <Paragraph style={{ fontSize: 16 }}>Company Name:    {theelement.Name}</Paragraph>
                <Paragraph style={{ fontSize: 16, }}>Email:   {theelement.Email}</Paragraph>
                <Paragraph style={{ fontSize: 16, }}>Job: {theelement.job}</Paragraph>
                <Paragraph style={{ fontSize: 16, }}>Experience:   {theelement.experience}</Paragraph>
                <Paragraph style={{ fontSize: 16, }}>Salary:   {theelement.salary}</Paragraph>
                <Paragraph style={{ fontSize: 16, }}>Description:   {theelement.description}</Paragraph>



              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: "space-around" }} >
                <Button mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                  Delete
                </Button>
                <Button mode="outlined" onPress={() =>  Apply(theelement.uid) }>
                  Apply
                </Button>
                <Button mode="outlined" onPress={hideDialog}>
                  Close
                </Button>

              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>


      </TouchableHighlight>

    )
  }
  return (
    <Provider>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>COMPANY</DataTable.Title>
          <DataTable.Title >JOB</DataTable.Title>
          <DataTable.Title >DESCRIPTION</DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={info}
          renderItem={renderingItem}
          keyExtractor={element => element.Email}

        />
      </DataTable>

    </Provider>
  )
}

function mapStateToProps(state) {
  return {
    User: state.User,
    Student:state.Student
  }
}



export default connect(mapStateToProps)(CompaniesInfo);

