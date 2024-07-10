import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function FormData() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
    });

    const handelSubmit = () => {
        if (!data.name || !data.email || !data.phone || !data.age) {
            Alert.alert('Svp remplir tous les champs');
        } else {
            fetch('http://192.168.100.57:8000/api/forms',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response=> response.json())
            .then(result=>{
                if(result.status){
                    Alert.alert('Succès', `Bonjour ${data.name} ! les données sont bien enregistré`);
                }else {
                    Alert.alert('Erreur', 'Une erreur est survenue ' + result.message);
                }
            })
            .catch(err=>console.log(err))
        }
    }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.title}>Formulaire</Text>
        <View style={styles.body}>
          {/* name */}
          <View style={styles.formInput}>
            <TextInput
              style={styles.input}
              label="Name"
              placeholder="Votre nom"
              placeholderTextColor="#999"
              value={data.name}
              onChangeText={(text) => setData({...data,name:text})}
            />
            <Text style={styles.subTitle}>
              Le nom doit etre moins de 255 caracteres
            </Text>
          </View>
          {/* email */}
          <View style={styles.formInput}>
            <TextInput
              style={styles.input}
              label="Email"
              placeholder="exemple@gmail.com"
              placeholderTextColor="#999"
              value={data.email}
              onChangeText={(text)=>setData({...data, email:text})}
            />
            <Text style={styles.subTitle}>
              Inserer une adresse email valide
            </Text>
          </View>
          {/* age */}
          <View style={styles.formInput}>
            <TextInput
              style={styles.input}
              label="Age"
              placeholder="Votre age"
              placeholderTextColor="#999"
              value={data.age}
              onChangeText={(text)=>setData({...data, age:text})}
            />
            {/* <Text style={styles.subTitle}>Your name should be less than 255 caracter</Text> */}
          </View>
          {/* phone */}
          <View style={styles.formInput}>
            <TextInput
              style={styles.input}
              label="Phone"
              placeholder="0721983323"
              placeholderTextColor="#999"
              value={data.phone}
              onChangeText={(text) => setData({...data, phone:text})}
            />
            <Text style={styles.subTitle}>
              Le numero de telephone sans (+212)
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              title="Envoyer"
              color="#287fb9"
              onPress={() => {
                handelSubmit()
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}> @2024 | Developed by Salma </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // pour que le conteneur principal occupe toute la hauteur de l'écran.
    // backgroundColor: '#222'
   
  },
  form: {
    flexGrow: 1,
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: "#222",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    // borderRadius: 25,
  },
  body: {
    // marginHorizontal: 20,
  },
  formInput: {
    marginVertical: 10,
  },
  input: {
    padding: 10,
    color: "gray",
    borderBottomWidth: 2,
    borderBottomColor: "#287fb9",
    backgroundColor: "#80bbe211",
  },
  subTitle: {
    color: "#287fb9",
    fontSize: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#80bbe211",
    color: "#287fb9",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#222",
  },
  footerText: {
    color: "#222",
  },
});
