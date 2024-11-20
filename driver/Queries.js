import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function Queries() {
  const [query, setQuery] = useState("");

  const handleSendQuery = () => {
    console.log("Query sent:", query);
    alert("Your query has been sent!");
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your query?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your query here"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Button title="Send" onPress={handleSendQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    marginBottom: 20,
    borderRadius: 6,
  },
});

export default Queries;
