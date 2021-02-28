import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";

function StudentsInfo() {
    const [info, setinfo] = useState([]);
    global.DATA = []
    var keyss = []
    database().ref('/Student').once("value").then(snapshot => {
        var result = snapshot.val();
        var keys = Object.entries(result)
        for (var i = 0; i < keys.length; i++) {
            keyss.push(keys[i][1])
        }
        for (var i = 0; i < keyss.length; i++) {
            global.DATA.push(Object.values(keyss[i]))
        }
        console.log(global.DATA)
        setinfo(global.DATA)
    })
    return (info.map((element) => {
        return (
            <View key={Math.random() * (100 - 1) + 1} style={{ backgroundColor: "white" }}>
                <View style={{ borderColor: '#00b8e6', borderWidth: 5, margin: 5 }}>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Name: {JSON.stringify(element[5])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Email: {JSON.stringify(element[3])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Age: {JSON.stringify(element[2])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Field: {JSON.stringify(element[1])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Qualification: {JSON.stringify(element[0])}</Text>
           
                </View>
            </View>
        );
    }))
}

export default StudentsInfo;