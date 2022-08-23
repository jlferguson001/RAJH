import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'

const preloadedState = {}

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
}

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
})

export default store
