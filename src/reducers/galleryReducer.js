export default function galleryReducer(state={}, action){
    switch (action.type) {
        case 'FETCH_GALLERY_PICTURES':
            return{
                result: action.payload
            }
        default:
            return state

    }
}