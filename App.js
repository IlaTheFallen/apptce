import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Bonafide from './pages/bonafide';

const App=createStackNavigator({
    Home:{screen:Home,navigationOptions: {
        headerShown: false,
    }},
    Login:{screen:Login,navigationOptions: {
        headerShown: false,
    }},
    Signup:{screen:Signup,navigationOptions: {
        headerShown: false,
    }},
    Dashboard:{screen:Dashboard,navigationOptions:{
        headerShown:false,
    }},
    Bonafide:{screen:Bonafide,navigationOptions:{
        headerShown:false,
    }}
});

export default createAppContainer(App);