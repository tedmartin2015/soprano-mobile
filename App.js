import MessageList from './Screens/MessageList';
import MessageSend from './Screens/MessageSend';
import MessageDetails from './Screens/MessageDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ignoreWarnings from 'react-native-ignore-warnings';

ignoreWarnings('Setting a timer');

const AppNavigator = createStackNavigator({
  messages: {
    screen: MessageList,
    navigationOptions: () => ({
      title: 'Sent Messages'
    })
  },
  send: {
    screen: MessageSend,
    navigationOptions: () => ({
      title: 'Create Message'
    })
  },
  details: {
    screen: MessageDetails,
    navigationOptions: () => ({
      title: 'Details'
    })
  }
});

export default createAppContainer(AppNavigator);