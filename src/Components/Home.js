import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";

const image = { uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-recruitment-looking-for-a-bull-poster-background-image_200940.jpg"}
const Home = (props) => {
    return(
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize:55, textAlign:'center', bottom:'16%',textShadowColor:"deepskyblue",textShadowRadius:25}}>Campus Recruitment System</Text>
    <Text onPress={()=>props.navigation.navigate("AdminToggle")} style={styles.text}>Admin</Text>
    <Text onPress={()=>props.navigation.navigate("Studenttoggle")} style={styles.text}>Student</Text>
    <Text onPress={()=>props.navigation.navigate("Companytoggle")} style={styles.text}>Company</Text>
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
    height:'102%',
    width:'100%'
  },
  text: {
    color: "#00b8e6",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:'1.5%',
    bottom:60,
    textShadowColor:"white",
    textShadowRadius:20,
    

  }
});

export default Home;
