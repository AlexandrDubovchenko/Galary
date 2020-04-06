import React from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, View, Image, Text } from 'react-native';



export const ImageItem = (props) => {
    return (
        <TouchableWithoutFeedback key={props.img.id}>
            <View >
                <Image source={{ uri: props.img.urls.small }} style={styles.image} ></Image>
                <Text> {props.img.user.name} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 4
    },
})