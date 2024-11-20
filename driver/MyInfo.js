import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

export default function MyInfo() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe", // Replace with fetched data
    experience: "5 years",
    contact: "1234567890",
  });

  // Simulate fetching data from a database
  useEffect(() => {
    // Example of fetching from a database or API
    async function fetchUserInfo() {
      try {
        // Replace with actual API call or database query
        const fetchedInfo = {
          name: "John Doe",
          experience: "5 years",
          contact: "1234567890",
        };
        setUserInfo(fetchedInfo);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch user information.");
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{userInfo.name}</Text>

      <Text style={styles.label}>Experience:</Text>
      <Text style={styles.value}>{userInfo.experience}</Text>

      <Text style={styles.label}>Contact:</Text>
      <Text style={styles.value}>{userInfo.contact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
});
