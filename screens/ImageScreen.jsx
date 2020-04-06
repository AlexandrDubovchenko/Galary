import React from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, View, Image, Modal, TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const ImageScreen = (props) => {
    return (
        <View>
            <Image style={styles.imageModal} source={{ uri: props.modalImg }}></Image>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        modalImg: state.galaryReducer.modalImg
    }
};

export default connect (mapStateToProps)(ImageScreen)

const styles = StyleSheet.create({

    imageModal: {
        height: Dimensions.get('window').height / 1.5,
        width: Dimensions.get('window').width
    },

})