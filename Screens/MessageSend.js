import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { sendMessage } from '../api';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f3f3f3',
        height: '100%'
    },
    fieldContainer: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    text: {
        height: 150,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    subjectHeight: {
        height: 40
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    },
    borderTop: {
        borderColor: '#f3f3f3',
        borderTopWidth: 1.5,
    }
}); 

class MessageSend extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            message: '',
            subject: ''
        }
    }

    isStateValid = () => {
        return (this.state.message !== '');
    }

    handleChangeSubject = (value) => {
        this.setState({ subject: value });
    }

    handleChangeMessage = (value) => {
        this.setState({ message: value });
    }

    handleSendMessage = async () => {
        if (this.isStateValid()) {
            console.log('SEND button clicked!');

            await sendMessage({
                message: this.state.message,
                sender: 'admin',
                subject: this.state.subject
            }).then(() => {
                console.log('Sending successful!');
                this.setState({ message: '', subject: '' });
            });  

            this.props.navigation.navigate('messages');
        }            
    } 

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.fieldContainer}> 
                    <TextInput
                        autoFocus
                        spellCheck={false}
                        onChangeText={this.handleChangeSubject}
                        value={this.state.subject}
                        style={[styles.text, styles.subjectHeight]}
                        placeholder="Subject"
                    >
                    </TextInput>
                    <TextInput 
                        style={styles.text}
                        spellCheck={false}
                        multiline={true}
                        onChangeText={this.handleChangeMessage}
                        value={this.state.message}
                        placeholder="Message"
                    >
                    </TextInput>
                </View>
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={this.handleSendMessage}
                    returnKeyType='done'
                >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default MessageSend;
