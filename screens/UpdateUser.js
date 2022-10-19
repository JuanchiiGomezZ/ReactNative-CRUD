import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { db } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const UpdateUser = (props) => {
  const userId = props.route.params.userId;
  const initialState = {
    name: "",
    email: "",
    phone: "",
    id: "",
  };
  const [user, setUser] = useState(initialState);
  const [isLoading, setisLoading] = useState(true);

  const navigation = useNavigation();

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = () => {
    const queryDoc = doc(db, "users", userId);
    getDoc(queryDoc).then((res) => setUser(res.data()));
  };
  useEffect(() => {
    getUserById();
    isLoading(false)
  }, []);

  const upadateUser = async () => {
    await setDoc(doc(db, "users", userId), {
      name: user.name,
      email: user.email,
      phone: user.phone,
      img: user.img,
    });
    setUser(initialState);
    Alert.alert("User updated", "You have been edited the user", [
      {
        text: "Continue",
        onPress: () => {
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>
            <View>
              <TextInput
                style={styles.textInputs}
                placeholder="Name User"
                onChangeText={(value) => handleTextChange(value, "name")}
                value={user.name}
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputs}
                placeholder="Email User"
                onChangeText={(value) => handleTextChange(value, "email")}
                value={user.email}
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputs}
                placeholder="Phone User"
                onChangeText={(value) => handleTextChange(value, "phone")}
                value={user.phone}
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputs}
                placeholder="Image Link"
                onChangeText={(value) => handleTextChange(value, "img")}
                value={user.img}
              />
            </View>
            <View>
              <Button title="Save user" onPress={upadateUser} />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
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
