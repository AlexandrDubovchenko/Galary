import React from 'react';

import { connect } from 'react-redux';
import { getImages, setModalVisible } from '../redux/galary-reducer';
import { ImageItem } from './ImageItem';
import { HomeScreen } from '../screens/HomeSreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Main extends React.Component {
    componentDidMount() {

        this.props.getImages(2)
    }

    render() {
      
        const images = this.props.images.map(img => (
            <TouchableOpacity key = {img.id}  onPress = {() =>{
                this.props.setModalVisible(img.id)
                this.props.navigation.navigate('Photo')}
            } >
                <ImageItem   img = {img}></ImageItem>
            </TouchableOpacity>
           
        ))
        
        return (
            <HomeScreen images = {images}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        images: state.galaryReducer.images,
        modalImg: state.galaryReducer.modalImg
    }
};

export default connect(mapStateToProps, { getImages, setModalVisible })(Main)
