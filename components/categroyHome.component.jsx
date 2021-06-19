import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';

export const CategoryHome = props => {

    const categories = [{ 'id': 1, 'name': 'Electronics', 'icon': 'logo-electron' },
    { 'id': 2, 'name': 'Women', 'icon': 'man-outline' },
    { 'id': 3, 'name': 'Men', 'icon': 'woman-outline' },
    { 'id': 4, 'name': 'Kids', 'icon': 'egg-outline' }];

    return <View style={{ backgroundColor: '#FFF', alignItems: 'center', paddingTop: '5%', flex:1 }}>
        <Text style={styles.primaryText}>Categories</Text>
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Text style={styles.secondaryText}>{'\n'}Hi {props.route.params.user}, {'\n'}Please select a category to get product list.</Text>
            {
                categories.map((c, i) => {
                    return (
                        <ListItem key={i} containerStyle={{ backgroundColor: '#9C1717', marginTop: 20, borderRadius: 5 }}>
                            <ListItem.Content>
                                <ListItem.Title style={{ color: '#FFFFFF', fontSize: 20 }}>{c.name}</ListItem.Title>
                            </ListItem.Content>
                            <Ionicons name={c.icon} size={20} color="#FFFFFF" />
                        </ListItem>
                    );
                })
            }
        </View>
    </View>
}

