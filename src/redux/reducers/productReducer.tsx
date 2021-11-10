import { initialState } from '../store'
import typesConstant from '../actions/types'
import { AnyAction } from 'redux'
import { Product } from '../../Interface/index';

export const productsReducer = (state = initialState.products, action: AnyAction) => {
    switch (action.type) {
        case typesConstant.FETCH_PRODUCT:
            return {
                ...state,
                all_products: action.payload,
            }

        case typesConstant.FILTER_BY_PRICE:
            return {
                ...state,
                all_products: action.payload.data.sort((a: Product, b: Product) => b.price - a.price),
            }

        case typesConstant.SEARCH_PRODUCT:
            return {
                ...state,
                all_products: action.payload,
            }

        case typesConstant.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }

        case typesConstant.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload)],
            }


        default:
            return state
    }
}