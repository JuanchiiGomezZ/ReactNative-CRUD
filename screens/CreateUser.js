import React,{useState} from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import {db} from '../firebase/firebase'
import { addDoc, collection} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const CreateUser = () => {
const [state, setState] = useState({
  name:'',
  email:'',
  phone: ''
})

const navigation = useNavigation();

const uploadDataToFirebase = () => {
  const usersCollection = collection(db, "users");
  addDoc(usersCollection, state);
};

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
  uploadDataToFirebase();
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

export default CreateUser;
