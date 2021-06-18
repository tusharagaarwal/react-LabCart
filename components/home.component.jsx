import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';

export const Home = props => {

    const user = '';// to be stored in state

    return <View style={styles.loginContainer}>
        <Text style={styles.primaryText}>Lab Cart</Text>
        <Card contaierStyle={styles.boxCard}>
            <Text style={{ backgroundColor: "#9C1717", marginBottom: 10, textAlign: "center", padding: 10 }}>
                <Ionicons name="people-circle-outline" size={100} color="#FFF" style={{ margin: 10 }} />
                <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold", textAlign: 'center'}}>{'\nCategories'}</Text>
            </Text>
        </Card>
        <Card contaierStyle={styles.boxCard}>
            <Text style={{ backgroundColor: "#9C1717", marginBottom: 10, textAlign: "center", padding: 10 }}>
                <Ionicons name="people-circle-outline" size={100} color="#FFF" style={{ margin: 10 }} />
                <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold", textAlign: 'center'}}>{'\nGift List'}</Text>
            </Text>
        </Card>
    </View>
}

