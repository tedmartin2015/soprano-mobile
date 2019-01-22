import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class MessageDetails extends Component {
    
    render() {
        const { item } = this.props.navigation.state.params;
        return (
            <View>
                <Text>{item.subject}</Text>
            </View>
        );
    }
}

export default MessageDetails;