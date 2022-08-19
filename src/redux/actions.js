import { EDIT_VIDEO } from "./actionTypes";

export const editVideo = (payload) => {
    return {
        type: EDIT_VIDEO,
        payload,
    }
}
