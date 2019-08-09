import {SET_CURRENT_USER} from './types'

export const setCurrentUser = (auth)=>({
    type:SET_CURRENT_USER,
    payload:auth
})