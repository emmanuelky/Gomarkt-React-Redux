import { initialState } from '../store'
import typesConstant from '../actions/types'

export const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case typesConstant.FETCH_PRODUCT:
            return {
                ...state,
                all_products: action.payload,
            }

        case typesConstant.FILTER_BY_PRICE:
            return {
                ...state,
                all_products: action.payload,
            }


        default:
            return state
    }
}