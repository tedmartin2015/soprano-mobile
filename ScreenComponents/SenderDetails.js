import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { formatDate } from '../api';

const styles = StyleSheet.create({
    footer: {
        textAlign: 'right',
        color: '#bdbdbd'
    },
});

export default function SenderDetails({ message }) {
    return (
        <View>
            <Text style={styles.footer}>sent by {message.sender} at {formatDate(message.date)}</Text>
        </View> 
    );
}