import React, { useState, useEffect } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import {db} from '../firebase/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";



const UpdateUser = (props) => {
    let userId = props.route.params.userId;
   
    const [state, setState] = useState({
        name:'',
        email:'',
        phone: '',
        img:''
      })
      
      const navigation = useNavigation();
      
      const upadateUser = () =>{
        const queryDoc = doc(db, "users", userId);
      }
      
      const saveNewUser = () =>{
        if(state.name === ""){
          alert('Please provide a name')
        }
        else if(state.email === ""){
          alert('Please provide a name')
        }
        else if(state.phone === ""){
          alert('Please provide a phone')
        }
      else{

        navigation.navigate("Home")
      }
      }
      
        return (
          <ScrollView>
            <View style={styles.container}>
              <View>
                <TextInput style={styles.textInputs} placeholder="Name User" onChangeText={(e) => setState({...state, name: e})} />
              </View>
              <View>
                <TextInput style={styles.textInputs} placeholder="Email User" onChangeText={(e) => setState({...state, email: e})} />
              </View>
              <View>
                <TextInput style={styles.textInputs} placeholder="Phone User" onChangeText={(e) => setState({...state, phone: e})} />
              </View>
              <View>
                <TextInput style={styles.textInputs} placeholder="Image Link" onChangeText={(e) => setState({...state, img: e})} />
              </View>
              <View>
                <Button title="Save user" onPress={() => saveNewUser()} />
              </View>
            </View>
          </ScrollView>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
        marginHorizontal:30
        },
        textInputs: {
          backgroundColor: "#cccc",
          height: 40,
          fontSize: 19,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
        },
      });


export default UpdateUser;