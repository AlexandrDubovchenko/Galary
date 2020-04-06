import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export const HomeScreen = (props) => {
   return( <ScrollView>
                <View style={styles.container}>
                    {props.images}
                </View>
            </ScrollView>)
}

const styles = StyleSheet.create({

    container: {

        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    

})