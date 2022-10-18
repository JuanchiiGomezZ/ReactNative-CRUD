import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";


const UserDetail = (props) => {
  let userId = props.route.params.userId;
  const [user, setUser] = useState([]);
  const navigation = useNavigation();

  const getUserById = () => {
    const queryDoc = doc(db, "users", userId);
    getDoc(queryDoc).then((res) => setUser(res.data()));
  };

  useEffect(() => {
    getUserById()
  }, []);


  const deleteUserFromFirebase = () =>{
    deleteDoc(doc(db, "users", userId));
    navigation.navigate("Home");
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>

          <FlatList 
          data={[user]}
          renderItem={({item}) =>{
            return(
              <>
              <View style={styles.containerImage}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.postimg.cc/FKK80vKQ/147144.png" }}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
              <Text style={styles.updateBtn} onPress={() =>{navigation.navigate("UpdateUser", {userId: userId})}}>Update user</Text>
              <Text style={styles.deleteBtn} onPress={deleteUserFromFirebase}>Delete user</Text>
            </View>
            </>
            )
          }}
          />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },
  image: {
    height: 250,
    width: 250,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  name: {
    marginVertical: 5,
    fontSize: 25,
    fontWeight: "600",
  },
  email: {
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
    marginVertical: 5,
  },
  updateBtn: {
    marginTop: 50,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "rgba(27, 176, 32, 0.8)",
    padding: 10,
    fontWeight: "600",
    color: "white",
    borderRadius: 20,
  },
  deleteBtn: {
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "rgba(255, 6, 6, 0.8)",
    padding: 10,
    fontWeight: "600",
    color: "white",
    borderRadius: 20,
  },
});
export default UserDetail;
