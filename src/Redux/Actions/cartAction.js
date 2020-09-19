import {
    CART_PRODUCT_REQUEST,
    CART_PRODUCT_SUCCESS,
    CART_PRODUCT_FAILED,
    PRODUCT_ADD_CART_REQUEST,
    PRODUCT_REMOVE_FROM_CART
} from '../types';


// Prduct Get Action
export const productsList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CART_PRODUCT_REQUEST })
            let products = []
            if (localStorage.getItem('products')) {
                products = JSON.parse(localStorage.getItem('products'))
            }
            dispatch({
                type: CART_PRODUCT_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch({
                type: CART_PRODUCT_FAILED,
                payload: error.message
            })
        }
    }
}


// Product Add Action
export const addProduct = (data) => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_ADD_CART_REQUEST, payload: data })
    }
}


// Product Remove Action
export const removeProduct = (data) => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_REMOVE_FROM_CART, payload: data })
    }
}