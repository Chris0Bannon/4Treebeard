const mapLocationReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MAP_LOCATION':
            return action.payload
            default:
            return state;
    }
}

export default mapLocationReducer;