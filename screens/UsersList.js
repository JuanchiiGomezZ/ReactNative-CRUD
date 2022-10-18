import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as firestore from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const users = [];
    firestore
      .getDocs(firestore.collection(db, "users"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const {name, email, phone} = doc.data();
          users.push({
            id: doc.id,
            name,
            email,
            phone
          })
        });
        setUsers(users)
      });
  }, []);

  return (
    <>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Users List</Text>
        <TextInput
          style={styles.searcher}
          placeholder="Enter the user name"
          onChangeText={(e) => setSearch(e)}
        />
      </View>
      <View style={styles.usersContainer}>
        <FlatList
          data={users.filter(user => ((user.name).toLocaleLowerCase()).includes(search.toLocaleLowerCase()))}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.userCard} key={item.id} onPress={() =>{navigation.navigate("UserDetail", {userId:item.id})}} >
                <Image
                  source={{ uri: "https://i.postimg.cc/FKK80vKQ/147144.png" }}
                  style={styles.userImage}
                />
                <View>
                <Text  style={styles.userName}>{item.name[0].toUpperCase() + item.name.slice(1)}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 20,
  },
  searcher: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  usersContainer: {
    margin: 30,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    borderBottomColor: "#cccc",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  userName: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 17,
  },
  userEmail: {
    marginLeft: 11,
    color:'gray'
  },
});
export default UsersList;
