// reducers/productReducers.js

import {
    GET_PRODUCTS_BY_BRAND_REQUEST,
    GET_PRODUCTS_BY_BRAND_SUCCESS,
    GET_PRODUCTS_BY_BRAND_FAIL,
} from "../constants/productConstants";

export const productsByBrandReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BY_BRAND_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case GET_PRODUCTS_BY_BRAND_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case GET_PRODUCTS_BY_BRAND_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
