import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function App() {
  const [data, setData] = useState();
  const showData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(err=>console.log(err))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Show Data</Text>
      {/* <Image source={{ uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" }}
       style={{width:300, height:300}}/> */}
      <Button style={styles.btn} onPress={showData} title="afficher data" />
      {data && 
      (<DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Completed</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>{data.id}</DataTable.Cell>
          <DataTable.Cell>{data.title}</DataTable.Cell>
          <DataTable.Cell>{data.completed? "true" : "false"}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'start',
    width: "100%",
  },
  hello:{
    color: '#777',
    fontSize: 50,
    marginBottom: 12,
    textDecorationLine: "underline",
  },
  table:{
    backgroundColor: "#ddd",
    margin: 12
  }
});
