import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert,FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { connect } from "react-redux"
import { DataTable, Provider, Paragraph, Dialog, Portal, Button } from 'react-native-paper';




function StudentsInfo(props) {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const [theelement, settheelement] = useState({})
  const hideDialog = () => setVisible(false);
  const [info, setinfo] = useState([]);

  const deleteInfo = (uid) => {
    Alert.alert(
      "Delete Student",
      "Are you sure you want to delete this student data?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => database().ref('/Student/' + uid).remove().then(hideDialog()) }
      ]
    );



  }

  global.DATA = []
  var keyss = []
  database().ref('/Students').once("value").then(snapshot => {
    var result = snapshot.val();
    var keys = Object.entries(result)
    for (var i = 0; i < keys.length; i++) {
      var value = keys[i][1]
      value.uid = keys[i][0]
      keyss.push(value)
    }

    setinfo(keyss)
  })

  const Hire = (element) => {
  var email=props.Company.email
  var splitEmail=email.split("@")
    database().ref('/Student/' + element+"/Offers/"+splitEmail[0]).update(props.Company)
    hideDialog()

  }

  const onpressFunc = (element) => {
    settheelement(element)
    showDialog()

  }

  const renderingItem = (element) => {

    return (

      <TouchableHighlight key={element.index} onPress={() => onpressFunc(element.item)}>
        <View>
          <DataTable.Row style={{ backgroundColor: "white" }}>
            <DataTable.Cell  >{element.item.Name}</DataTable.Cell>
            <DataTable.Cell >{element.item.Age}</DataTable.Cell>

            <DataTable.Cell >{element.item.Qualification}</DataTable.Cell>

          </DataTable.Row>
          <Portal >
            <Dialog visible={visible} onDismiss={hideDialog} >
              <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", textDecorationLine: "underline" }}>Student Information</Dialog.Title>
              <Dialog.Content >
                <Paragraph style={{ fontSize: 16 }}>Name:    {theelement.Name}</Paragraph>
                <Paragraph style={{ fontSize: 16 }}>Email:   {theelement.Email}</Paragraph>
                <Paragraph style={{ fontSize: 16 }}>Age: {theelement.Age}</Paragraph>
                <Paragraph style={{ fontSize: 16 }}>Qualification:   {theelement.Qualification}</Paragraph>
                <Paragraph style={{ fontSize: 16 }}>Field:   {theelement.Field}</Paragraph>


              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: "space-around" }} >
                {props.User == "Admin" ?
                  <Button mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                    Delete
                  </Button> : <View></View>}

                <Button mode="outlined" onPress={() =>  Hire(theelement.uid) }>
                  Hire
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
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title >Age</DataTable.Title>
          <DataTable.Title >Qualification</DataTable.Title>
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
    Company:state.Company
  }
}



export default connect(mapStateToProps)(StudentsInfo);

