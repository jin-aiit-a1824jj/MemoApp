import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'
import MemoCreateScreen from './src/screens/MemoCreateScreen';

import ENV from './env.json';
import firebase from 'firebase';
require("firebase/firestore");

const firebaseConfig = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DATABASE_URL,
    projectId: ENV.FIREBASE_PROJECT_ID,
    storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);


const headerOption = { 
    headerTitle: 'Memot',
    headerStyle:{
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerBackTitle: '  ',
  };

const AppNavigator = createStackNavigator({
  Login:     { screen: LoginScreen, navigationOptions: headerOption },
  Signup:    { screen: SignupScreen, navigationOptions: headerOption },
  Home:      { screen: MemoListScreen, navigationOptions: headerOption },
  MemoDetail:{ screen: MemoDetailScreen, navigationOptions: headerOption },
  MemoEdit:  { screen: MemoEditScreen, navigationOptions: headerOption },
  MemoCreate: {screen: MemoCreateScreen, navigationOptions: headerOption  },
});


export default createAppContainer(AppNavigator);