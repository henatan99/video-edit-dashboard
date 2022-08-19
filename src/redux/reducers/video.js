const initialState = {
    video_title: '',
    subject: '',
    category: '',
    primers: '',
    hashTags: '',
    currentHashTags: '',
    level1: '',
    level2: '',
    level3: '',
    level4: ''
}

const videoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case "EDIT_VIDEO": 
            return {
                payload
            }
        default:
            return state;
    }
} 

export default videoReducer;