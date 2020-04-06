import { ImagesApi } from "../api/api";

const SET_IMAGES = "SET_IMAGES";
const SET_MODAL_VISIBLE = "SET_MODAL_VISIBLE";

export const galaryReducer = (state = {images : [] , modalImg : ''}, action) => {
    switch (action.type) {
        case SET_IMAGES :
            
            return {
                ...state,
                images : action.images
            }
        case  SET_MODAL_VISIBLE : 
        console.log(action.id);
        
            return {
                ...state,
                modalImg : !action.id ? '' : state.images.find(img => img.id === action.id).urls.full,
            }    
        default:
             return state    
    } 
}

export const setImages = (images) => ({type: SET_IMAGES, images: images});
export const setModalVisible = ( id = '') => ({type :  SET_MODAL_VISIBLE, id })
export const getImages = (page) => {
    return (dispatch) => {
        ImagesApi.getImages(page)
            .then(res => res.json())
            .then(res => dispatch(setImages(res)))
    }
}
