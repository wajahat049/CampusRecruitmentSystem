import * as React from 'react';
import { View, Text, ScrollView, } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";

function CompaniesInfo() {
    const [info, setinfo] = useState([]);
    global.DATA = []
    var keyss = []
    database().ref('/Companies').once("value").then(snapshot => {
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
    return info.map((element) => {
        return (
            <View key={Math.random() * (100 - 1) + 1} style={{ backgroundColor: "white", }}>
                <View style={{ borderColor: '#00b8e6', borderWidth: 5, margin: 5 }}>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Name: {JSON.stringify(element[7])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Email: {JSON.stringify(element[2])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Description: {JSON.stringify(element[3])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Job: {JSON.stringify(element[4])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Comapany: {JSON.stringify(element[5])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Salary: {JSON.stringify(element[6])}</Text>
                    <Text style={{ color: "#00b8e6", fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Experience: {JSON.stringify(element[0])}</Text>
                </View>
            </View>
        );
    });
}

export default CompaniesInfo;