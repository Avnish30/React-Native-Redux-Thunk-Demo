import React, {useEffect} from 'react';
import Login from './src/Component/Login';
import NewLogin from './src/Component/NewLogin';
import Home from './src/Component/Home';
import posts from './src/Component/posts';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {Button} from 'react-native';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import SampleReducer from './src/Reducer/SampleReducer';
import PostReducer from './src/Reducer/PostReducer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import thunk from 'redux-thunk';
import PushNotification from 'react-native-push-notification';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  userData: SampleReducer,
  post: PostReducer,
});
const storex = createStore(
  // SampleReducer,
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerApp() {
  return (
    // <Provider store={storex}>
    //   <NavigationContainer>
    <Drawer.Navigator initialRouteName="NewLogin">
      <Drawer.Screen name="NewLogin" component={NewLogin} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Posts" component={posts} />
    </Drawer.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
}
function App({navigation}) {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:55', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION: 25', notification);
        PushNotification.localNotification({
          channelId: notification.channelId,
          id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
          title: 'My Notification Title', // (optional)
          message: 'My Notification Message', // (required)
        });
        console.log('NOTIFICATION: 256', notification.channelId);
        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData); cmcmcm
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:6', notification.action);
        console.log('NOTIFICATION:52', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }, []);
  return (
    <Provider store={storex}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Login"
            options={{
              title: 'My Login',
              headerRight: () => (
                <Button
                  onPress={() => alert('')}
                  title="menu"
                  color="#d73232"
                />
              ),
            }}
            component={DrawerApp}
          />
          <Stack.Screen
            name="Home"
            options={{title: 'My Home'}}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
