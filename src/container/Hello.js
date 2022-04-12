import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const Hello = () => {
  // Text input
  const [EmailID, setText] = React.useState('');
  const [PassWord, setPassword] = React.useState('');
  function LearnMore(){
    console.log("Email  = " + EmailID);
    console.log("Password = " + PassWord);
  }
 
  return (
    //  <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>WELCOME,</Text>
        <Text style={styles.SubTitle}>Sign in to Continue!</Text>
      </View>

      <View style={styles.email}>
        <TextInput
          label="Email"
          value={EmailID}
          style={{margin: 10, textAlign: 'left'}}
          mode="outlined"
          activeOutlineColor="#3399ff"
          // selectionColor = 'red'
          outlineColor="grey"
          onChangeText={text => setText(text)}
        />

    
        <TextInput
          label="Password"
          value={PassWord}
          placeholder="Password"
          style={{borderRadius: 50, margin: 10, textAlign: 'left'}}
          mode="outlined"
          // mode="flat",
          secureTextEntry={true}
          outlineColor="gray"
          activeOutlineColor="#3399ff"
          onChangeText={PassWord => setPassword(PassWord)}
        />
        <TouchableOpacity
          onPress={() => {
            console.log('Forgot Password');
          }}>
          <Text style={styles.forgotPas}>Forgot Password?</Text>
        </TouchableOpacity> 
        <View style={styles.Submitbutton}>
          <Button
            onPress={LearnMore}
            title="Login"
            color="#3399ff"
            accessibilityLabel="Learn more about this purple button"
          />
          <TouchableOpacity
            onPress={() => {
              console.log('FB Login Pressed');
            }}>
            <View style={styles.FbLogin}>
              <View style={styles.FBloginView}>
                <Image
                  style={styles.tinyLogo}
                  source={require('./assets/images/facebook.png')}
                />
              </View>
              <View style={styles.FBloginView}>
                <Text style={styles.FBLoginText}>Connect With Facebook.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.SignUp}>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 13}}>
          {' '}
          I'm a new User,
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log('New User');
          }}>
          <Text style={{color: '#EE82EE', fontWeight: '500'}}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
};
export default Hello;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  SubTitle: {
    fontSize: 17,
    color: 'gray',
    fontWeight: 'bold',
  },
  email: {
    overflow: 'visible',
    borderradius: 50,
  },

  forgotPas: {
    fontSize: 10,
    color: 'black',
    textAlign: 'right',
    marginRight: 10,
    fontWeight: '500',
  },
  Submitbutton: {
    borderradius: 30,
    marginTop: 32,
  },
  tinyLogo: {
    height: 20,
    width: 20,
  },
  FbLogin: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FBloginView: {
    margin: 5,
  },
  FBLoginText: {
    color: 'blue',
    fontWeight: '400',
    fontSize: 16,
  },
  SignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
