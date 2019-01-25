import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDate } from '../api';
import SenderDetails from '../ScreenComponents/SenderDetails';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
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
    sender: {
        fontWeight: '200',
        fontSize: 14,
        color: '#bdbdbd',
        textAlign: 'right',
        marginLeft: 5,
    },
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    },
    footer: {
        textAlign: 'right',
        color: '#bdbdbd'
    },
    header: { 
        paddingBottom: 10
    },
    subject: {
        textAlign: 'center',
        fontWeight: 'bold',

    }
});
class MessageDetails extends Component {
    
    render() {
        const { message } = this.props.navigation.state.params;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.card}>
                    <Text style={styles.subject}>{message.subject}</Text>
                </View>
                <View style={styles.card}> 
                    <View style={styles.header}>
                        <Text style={styles.title}>{message.message}</Text>
                    </View>    
                    <SenderDetails message={message} />                                  
                </View>
            </View>
            
        );
        
    }
}

export default MessageDetails;