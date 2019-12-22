import axios from 'axios';
import { BASE_URL } from '../../Constants/constants';
import { GET_ALL_CHARACTERS } from './types'

const getAllCharacters = () => (dispatch) => {
    return axios.get(`${BASE_URL}/people`).then((response) => {
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data
        })
    })
}

export { getAllCharacters }