import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeacherLogin')}>
        <Text style={styles.buttonText}>Teachers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TeacherLoginScreen() {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Teacher’s Login</Text>
      <View style={styles.input}>
        <Text style={styles.inputText}>Enter your email</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>Enter your password</Text>
      </View>
      <Text style={styles.signupText}>
        Don’t have a account? <Text style={styles.signupLink}>Create one</Text>
      </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8B6BB1',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 4,
    marginVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D254C',
    marginBottom: 32,
    fontFamily: 'sans-serif',
  },
  input: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 2,
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.7,
  },
  signupText: {
    color: '#222',
    marginBottom: 32,
    fontSize: 15,
    textAlign: 'center',
  },
  signupLink: {
    color: '#D08CB3',
  },
  loginButton: {
    backgroundColor: '#8B6BB1',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },
});
