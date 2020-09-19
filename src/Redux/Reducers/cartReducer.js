import {
    CART_PRODUCT_REQUEST,
    CART_PRODUCT_SUCCESS,
    CART_PRODUCT_FAILED,
    PRODUCT_ADD_CART_REQUEST,
    PRODUCT_REMOVE_FROM_CART
} from '../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({ autoClose: 2000 })

const initialState = {
    loading: false,
    cartProducts: [],
    error: "",
    add_success: "",
}

export default function (state = initialState, action) {
    switch (action.type) {

        // All Cart Products
        case CART_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                cartProducts: action.payload
            }
        case CART_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                cartProducts: [],
                error: action.payload
            }


        // Product Add To Cart
        case PRODUCT_ADD_CART_REQUEST:
            let productAlreadyExists = state.cartProducts.find(x => x.id === action.payload.id);
            if (productAlreadyExists) {
                toast.warn('Already added into cart')
                return {
                    ...state,
                    add_success: false,
                }
            } else {
                let products = []

                if (localStorage.getItem('products')) {
                    products = JSON.parse(localStorage.getItem('products'))
                }

                products.push(action.payload)
                localStorage.setItem('products', JSON.stringify(products))
                toast.success('One product added into cart')

                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload],
                    add_success: true
                }
            }

        
            // Product remove
            // case PRODUCT_REMOVE_FROM_CART:


        default:
            return state

    }
}