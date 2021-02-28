import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";

const image = { uri: "https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-recruitment-poster-advertising-background-image_164513.jpg" };
const Home = (props) => {
    return(
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize:55, textAlign:'center', bottom:120,textShadowColor:"deepskyblue",textShadowRadius:25}}>Campus Recruitment System</Text>
    <Text onPress={()=>props.navigation.navigate("AdminLogin")} style={styles.text}>Admin</Text>
    <Text onPress={()=>props.navigation.navigate("StudentsLogin")} style={styles.text}>Student</Text>
    <Text onPress={()=>props.navigation.navigate("CompaniesLogin")} style={styles.text}>Company</Text>
    </ImageBackground>
  </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'100%',
    width:'100%'
  },
  text: {
    color: "#00b8e6",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,
    bottom:80,
    textShadowColor:"skyblue",
    textShadowRadius:20,
  }
});

export default Home;