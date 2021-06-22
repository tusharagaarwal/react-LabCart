import React, { useState } from 'react';
import { Text, View, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';
import product from '../mock-data/CategoryData/CategoryData'
import { ScrollView } from 'react-native-gesture-handler';

export const CategoryHome = ({ navigation, route }) => {

    const categories = product.categories;

    // const gotoCategory = id => { 
    //     navigation.navigate('ProductList', { 'category': id }); 
    // }

    return <View style={{ backgroundColor: '#FFF', alignItems: 'center', paddingTop: '5%', marginBottom: 20, flex: 1 }}>
        <Text style={styles.primaryText}>Categories</Text>
        <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Text style={styles.secondaryText}>{'\n'}Hi {route.params.user}, {'\n'}Please select a category to get product list.</Text>
            {
                categories.map((c, i) => {
                    return (
                        <ListItem key={i} containerStyle={{ backgroundColor: '#9C1717', marginTop: 20, borderRadius: 5 }} onPress={() => { navigation.navigate('ProductList', { 'category': c.category_id }) }}>
                            <ListItem.Content>
                                <ListItem.Title style={{ color: '#FFFFFF', fontSize: 20 }}>{c.name}</ListItem.Title>
                                <Image
                                source={{
                                    uri: c.image_url,
                                }}></Image>
                            </ListItem.Content>
                            
                        </ListItem>
                    );
                })
            }
        </ScrollView>
    </View>
}

