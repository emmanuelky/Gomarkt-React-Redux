import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from '../reducers/productReducer'
import { ReduxStore } from '../../Interface'


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// INITIAL STATE
export const initialState: ReduxStore = {
    products: {
        all_products: [],
        loading: false,
        cart: [],
    }

}

// LOCAL STORAGE
const persistConfig = {
    key: 'root',
    storage,
    // transforms: [
    //     encryptTransform({
    //         secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    //     }),
    // ],
}

//COMBINE ALL REDUCERS
const allReducers = combineReducers({
    products: productsReducer,

})


//PERSIST REDUX STORE
const persistAllReducers = persistReducer(
    persistConfig, allReducers
)

export const store = createStore(persistAllReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)))
// process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))


export const persistor = persistStore(store)