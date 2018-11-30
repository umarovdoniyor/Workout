import React from 'react'
import Main from './Main'
import Info from './Info'
import exercise from './assets/exercise'
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

const Drawer = createDrawerNavigator(
  {
    [exercise[0].name]: {
      screen: ({navigation}) => <Main {...exercise[0]} {...navigation} />
    },
    [exercise[1].name]: {
      screen: ({navigation}) => <Main {...exercise[1]} {...navigation} />
    },
    [exercise[2].name]: {
      screen: ({navigation}) => <Main {...exercise[2]} {...navigation} />
    },
    [exercise[3].name]: {
      screen: ({navigation}) => <Main {...exercise[3]} {...navigation} />
    },
  },
  {
    drawerBackgroundColor: '#676B47'
  },
)
const Stack = createStackNavigator({Drawer, Info}, {headerMode: 'none'})
const Root = createAppContainer(Stack)

export default class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}

