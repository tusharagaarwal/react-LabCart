import React, { useState } from 'react';
import { Text, View, Image } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export const ProductList = ({ navigation, route }) => {
    const id = route.params.category;
    let data = [];
    if (id === '101') {
        //mobile
        data = require('../mock-data/MobileData/Mobile');
    } else if (id === '102') {
        data = require('../mock-data/LaptopData/Laptops');
    } else if (id === '103') {
        data = require('../mock-data/FootwearData/Footwear');
    } else if (id === '104') {
        data = require('../mock-data/FashionData/Fashion');
    } else if (id === '105') {
        data = require('../mock-data/HomeApplianceData/HomeAppliance');
    } else if (id === '106') {
        data = require('../mock-data/BagData/Bags');
    }
    //TODO: Add mapping for rest of categories
    data = data.default.ProductCollection;
    console.log(data);

    return <ScrollView contentContainerCtyle={{ backgroundColor: '#FFF', alignItems: 'center', paddingTop: '5%', flex: 1 }}>
        <Input
            placeholder=''
            leftIcon={
                <Ionicons name='search-outline' size={20} color="#9C1717" />
            }
        />

        <View>
            {
                data.map((product, i) => {
                    return (
                        <View style={{ padding: 10, borderColor: '#9C1717', borderStyle: 'solid', borderWidth: 2, margin: 5, display: 'flex', flexWrap: 'nowrap' }}>
                            {console.log(product.ProductPicUrl)}
                            <View style={{ flex: 1 }}>
                                <Image style={{ height: 40, width: 40 }} source={{
                                    uri: product.ProductPicUrl,
                                }}></Image>
                            </View>
                            <Text style={{ flex: 3 }}>
                                <Text style={{ color: "#9C1717", fontSize: 15 }}>{product.Name}</Text>{'\n'}
                                <Text style={styles.secondaryText}>Rs. {product.Price}</Text>
                                {/* <Text style={styles.secondaryText}>{product.}</Text> */}
                            </Text>
                        </View>
                    );
                })
            }
        </View>
    </ScrollView>
}

