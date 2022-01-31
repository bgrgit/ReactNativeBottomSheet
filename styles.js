import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  logo: {
    height: 80,
    width: 250,
  },

  textInput: {
    backgroundColor: 'transparent',
    color: 'blue',
    paddingLeft: 0,
    fontSize: 20,
  },
  email: {
    borderColor: '#14F84F',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  emailFails: {
    borderColor: '#FF0000',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#5DAACC',
    width: '100%',
    marginTop: 40,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textLink:{
    color: 'black',
    fontSize: 15,
   marginTop: 20,
   fontWeight:'bold'
  }
});
