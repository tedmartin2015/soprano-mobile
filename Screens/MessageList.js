import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import MessageCard from '../ScreenComponents/MessageCard';
import ActionButton from 'react-native-action-button';
import { getMessages } from '../api';
import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    },  
    addButton: {
        textAlign: "right",
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    title: {
        fontSize: 18,
        fontWeight: '300',
    },
    date: {
        fontWeight: '200',
        fontSize: 14,
        color: '#bdbdbd',
        textAlign: 'left',   
        paddingRight: 5
    }
});

class MessageList extends Component {
    state = {
        messages: [],
        tests: [{sender: 'Test', subject: 'Tests'}, {sender: 'Test1', subject: 'Tests2'}]
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('send');
    }

    onLoadMessages = async () => {
        this.setState({ isMounted: true });

        getMessages('admin').then((data) => { 
            this.setState({ messages: data });                                    
        }, (error) =>{
            console.log(`ERROR FOUND: ${error}`);
        });
    }

    componentDidMount() {
        firebase.database().ref('sent-messages/').on('value', (snapshot) => {
            let messages = [];
            const rawMessages = snapshot.val();
            if (rawMessages != null) {
                this.setState({ messages: [] });
                Object.keys(rawMessages).forEach(key => {
                    let message = {
                        message: rawMessages[key].message,
                        sender: rawMessages[key].sender,
                        subject: rawMessages[key].subject,
                        date: rawMessages[key].date,
                        id: key
                    }
                    messages.push(message);                                             
                });
                console.log(`This is an object: ${messages}`);
                this.setState({ messages });
            }
        });
    }

    handleItemPressed = (item) => {
        this.props.navigation.navigate('details', { message: item });
    }

    render() {
        return (
            [
                <FlatList
                    key="flatlist" 
                    data={this.state.messages}
                    style={styles.list}
                    keyExtractor={(message) => message.id}    
                    renderItem={
                            ({item}) => 
                            <TouchableHighlight onPress={() => this.handleItemPressed(item)}>
                                <MessageCard message={item} />
                            </TouchableHighlight>    
                        }
                />,
                <ActionButton
                    key="fab"
                    onPress={this.handleAddEvent}
                    buttonColor="rgba(231, 76, 60, 1)">
                </ActionButton>
            ]
        );
    }
}
 
console.ignoredYellowBox = ['Setting a timer'];

export default MessageList;