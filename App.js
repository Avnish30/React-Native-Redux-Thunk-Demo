import React from 'react';
import Login from './src/Component/Login';
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
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Posts" component={posts} />
    </Drawer.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
}
function App({navigation}) {
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
