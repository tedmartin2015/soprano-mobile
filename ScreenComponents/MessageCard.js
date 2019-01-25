import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate } from '../api';
import SenderDetails from './SenderDetails';

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
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{message.subject}</Text>
            </View>                              
            <View style={styles.detailsContainer}>
                <SenderDetails message={message} />
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