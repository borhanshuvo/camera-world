import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const ProductItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.product;
    return (
        <View style={styles.productContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Confirm Order"}
                    onPress={() => {
                        console.warn("Order Successfully Confirmed");
                    }}
                />
            </View>

        </View>
    );
};

export default ProductItem;