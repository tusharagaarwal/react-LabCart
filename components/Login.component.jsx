import React, { useState } from 'react';
import { Text, TextInput, View, Alert } from 'react-native'
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';

export const Login = props => {
    const [name, setName] = useState('')

    //validate listener
    const validate = (evt) => {
        if (name === '') {
            Alert.alert("PLease enter a user name")
        } else {
            props.navigation.navigate('Home', { 'user': name });
        }
    }

    return <View style={styles.loginContainer}>
        <Text style={styles.primaryText}>User</Text>
        <Ionicons name="people-circle-outline" size={70} color="#9C1717" style={{ margin: 10 }} />
        <TextInput style={styles.textbox} placeholder="Enter Name" onChangeText={name => setName(name) } />
        <Text style={{ backgroundColor: '#9C1717', margin: 50 }}>
            <Ionicons name="log-in-outline" size={55} color="#FFF" onPress={validate} />Ï
        </Text>
    </View>
}

