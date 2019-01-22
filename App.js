import MessageList from './Screens/MessageList';
import MessageSend from './Screens/MessageSend';
import MessageDetails from './Screens/MessageDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  messages: {
    screen: MessageList,
    navigationOptions: () => ({
      title: 'Messages Sent'
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