import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

  return (
    
    <View style={styles.body} >
        <Text style={styles.title}>CRUD</Text>
        <View style={styles.container}>
        <TouchableOpacity>
        <Text style={styles.createUserBtn} onPress={() =>{navigation.navigate("CreateUser")}}>Create new user</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.userListBtn} onPress={() =>{navigation.navigate("UsersList")}}>Users List</Text>
        </TouchableOpacity>
        </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'rgba(210, 210, 210, 0.86)'
    },
    title:{
        textAlign:'center',
        fontSize:50,
        fontWeight:'900',
        marginTop:40,
        color:'rgba(255, 24, 24, 0.68)'
    },
    container:{
        flex:1,
        justifyContent: "center",
        marginHorizontal:30,
    },
    createUserBtn:{
        textAlign: "center",
        fontSize:23,
        fontWeight:'800',
        backgroundColor:'rgba(86, 158, 255, 0.8)',
        paddingVertical:10,
        borderRadius:15, 
        marginBottom:30,
    },
    userListBtn:{
        textAlign: "center",
        fontSize:23,
        fontWeight:'800',
        backgroundColor:'rgba(244, 255, 108, 0.8)',
        paddingVertical:10,
        borderRadius:15, 
    }
})

export default Home