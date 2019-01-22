import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
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
    sender: {
        fontWeight: '200',
        fontSize: 14,
        color: '#bdbdbd',
        textAlign: 'right',
        marginLeft: 5,
        
    },
    date: {
        fontWeight: '200',
        fontSize: 14,
        color: '#bdbdbd',
        textAlign: 'left',   
        paddingRight: 5
    },
    title: {
        fontSize: 18,
        fontWeight: '300',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});
class MessageDetails extends Component {
    
    render() {
        const { message } = this.props.navigation.state.params;
        return (
            
            <View>
                <Text>{message.subject}</Text>
            </View>
        );
        // <View style={styles.card}> 
        //     <View style={styles.header}>
        //         <Text style={styles.title}>{message.subject}</Text>
        //     </View>                              
        //     <View style={styles.detailsContainer}>
        //         <View>
        //             <Text style={styles.date}>{formatDate(message.date)}</Text>
        //         </View>
        //         <View><Text style={{color: '#bdbdbd'}}>|</Text></View>
        //         <View>
        //             <Text style={styles.sender}>sent by: {message.sender}</Text>
        //         </View>                
        //     </View>          
        // </View>
    }
}

export default MessageDetails;