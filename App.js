import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.image}
        source={require('./assets/profile.jpg')}
        />
      <View style={styles.scndContainer}>
        <Text style={styles.title}>Carlos Henrique</Text>
        <Text style={styles.subtitle}>Full-stack developer at Real Seguro Viagem</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    alignItems: 'center',
    paddingTop: 100
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor:"red",
    
  },
  title: {
    fontSize: 28,
    fontWeight:'bold',
    color: "white",
    paddingTop: 30
  },
  scndContainer: {
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: 'white'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#8605B2',
    borderWidth: 2
  }
});
