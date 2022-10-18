import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.btn}>
        <Button  title="Create new user" onPress={() =>{navigation.navigate("CreateUser")}} />
        </View>
        <View style={styles.btn}>
        <Button  title="Users list" onPress={() =>{navigation.navigate("UsersList")}}/>
        </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginHorizontal:30,
    },
    btn:{
        marginVertical:15,
    }
})

export default Home