import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate } from '../api';

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

export default function MessageCard({ message }) {
    return (    
        <View style={styles.card}> 
            <View style={styles.header}>
                <Text style={styles.title}>{message.subject}</Text>
            </View>                              
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.date}>{formatDate(message.date)}</Text>
                </View>
                <View><Text style={{color: '#bdbdbd'}}>|</Text></View>
                <View>
                    <Text style={styles.sender}>sent by: {message.sender}</Text>
                </View>                
            </View>          
        </View>
    );
}

MessageCard.propTypes = {
    message: PropTypes.shape({
        subject: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired
    }),
}