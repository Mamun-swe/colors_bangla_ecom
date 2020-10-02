import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILED
} from '../types';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

// Orders get action
export const ordersList = () => {
    return async (dispatch) => {
        try {
            const header = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
            dispatch({ type: GET_ORDERS_REQUEST })
            const response = await axios.get(`${apiURL}getUserOrders`, header)
            dispatch({
                type: GET_ORDERS_SUCCESS,
                payload: response.data.result
            })
        } catch (error) {
            dispatch({
                type: GET_ORDERS_FAILED,
                payload: error.message
            })
        }
    }
}
