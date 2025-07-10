import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <View style={{flex:1,flexDirection:'row',marginTop:10,height:50}}>
            <Image
              source={require('./assets/logo-unic.jpg')}
              style={{ width: 40, height: 40 }}
            />
            <View style={{width:10}} />
            <Text  style={styles.titulo1}>SISTEMA DE RECEPCIÓN UNIC</Text>
          </View>
          <Text style={styles.titulo2}>CENTRO INTEGRAL DE ESTUDIOS SUPERIORES</Text>
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
  }
});
