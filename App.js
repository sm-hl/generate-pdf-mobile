import React from "react";
import { View, StyleSheet } from "react-native";
import FormData from "./components/FormData";

export default function App() {
  return (
    <View style={styles.container}>
      <FormData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    marginTop:20,
    padding: 20, 
  },
});
