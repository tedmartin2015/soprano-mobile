import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { sendMessage } from '../api';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: '300',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
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
    text: {
        height: 150,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    subjectHeight: {
        height: 20
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
            <KeyboardAvoidingView resetScrollToCoords={{x: 0, y: 0}} scrollEnabled={false} style={styles.mainContainer}>               
                <View style={styles.card}>
                    <TextInput
                        autoFocus
                        spellCheck={false}
                        onChangeText={this.handleChangeSubject}
                        value={this.state.subject}
                        style={[styles.text, styles.subjectHeight]}
                        placeholder="Subject"
                    />
                </View>
                <View style={styles.card}>
                    <TextInput 
                        style={styles.text}
                        spellCheck={false}
                        multiline={true}
                        onChangeText={this.handleChangeMessage}
                        value={this.state.message}
                        placeholder="Message"
                    />
                </View>                                  
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={this.handleSendMessage}
                    returnKeyType='done'
                >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        );
    }
}

export default MessageSend;
