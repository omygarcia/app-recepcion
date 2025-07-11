import React, { useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


export default function App() {
  const router = useRouter();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const login = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/dashboard');
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={{flexDirection:'row',marginTop:10,height:50}}>
            <Image
              source={require('../assets/logo-unic.jpg')}
              style={{ width: 40, height: 40 }}
            />
            <View style={{width:10}} />
            <Text  style={styles.titulo1}>SISTEMA DE RECEPCIÓN UNIC</Text>
          </View>
          <Text style={styles.titulo2}>CENTRO INTEGRAL DE ESTUDIOS SUPERIORES</Text>
          <View style={{height:20}} />
          <Text style={styles.titulo2}>Acceso al Sistema</Text>
          <Text style={styles.label}>Correo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu correo"
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.boton} onPress={login}>
            <Text style={styles.botonTexto}>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#335280',
    color:"#ffffff",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo1:{
    color: "#ffffff",
    fontSize:20
  },
  titulo2:{
    color: "#eb8b24",
    fontSize:15
  },
  label:{
    color:'white',
    fontWeight:700
  },
  input: {
    height: 40,
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
   boton: {
    backgroundColor: "#eb8b24",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});