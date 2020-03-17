import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'


const headerOption = { 
    headerTitle: 'Memot',
    headerStyle:{
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

const AppNavigator = createStackNavigator({
  Home:      { screen: MemoListScreen, navigationOptions: headerOption },
  MemoDetail:{ screen: MemoDetailScreen, navigationOptions: headerOption },
  MemoEdit:  { screen: MemoEditScreen, navigationOptions: headerOption },
  Login:     { screen: LoginScreen, navigationOptions: headerOption },
  Signup:    { screen: SignupScreen, navigationOptions: headerOption }
});


export default createAppContainer(AppNavigator);