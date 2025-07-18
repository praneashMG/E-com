// import { createSlice } from "@reduxjs/toolkit";


// const productsSlice = createSlice({
//     name: 'products',
//     initialState: {
//         loading: false
//     },
//     reducers: {
//         productsRequest(state, action){
//             return {
//                 loading: true
//             }
//         },
//         productsSuccess(state, action){
//             return {
//                 loading: false,
//                 products: action.payload.products,
//                 productsCount: action.payload.count,
//                 resPerPage : action.payload.resPerPage
//             }
//         },
//         productsFail(state, action){
//             return {
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         adminProductsRequest(state, action){
//             return {
//                 loading: true
//             }
//         },
//         adminProductsSuccess(state, action){
//             return {
//                 loading: false,
//                 products: action.payload.products,
//             }
//         },
//         adminProductsFail(state, action){
//             return {
//                 loading: false,
//                 error:  action.payload
//             }
//         },
//         clearError(state, action){
//             return {
//                 ...state,
//                 error:  null
//             }
//         }
//     }
// });

// const { actions, reducer } = productsSlice;

// export const { 
//     productsRequest, 
//     productsSuccess, 
//     productsFail,
//     adminProductsFail,
//     adminProductsRequest,
//     adminProductsSuccess

// } = actions;

// export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        productsCount: 0,
        resPerPage: 0,
        error: null
    },
    reducers: {
        productsRequest(state) {
            state.loading = true;
        },
        productsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload.products;
            state.productsCount = action.payload.count;
            state.resPerPage = action.payload.resPerPage;
        },
        productsFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        adminProductsRequest(state) {
            state.loading = true;
        },
        adminProductsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload.products;
        },
        adminProductsFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        }
    }
});

const { actions, reducer } = productsSlice;

export const { 
    productsRequest, 
    productsSuccess, 
    productsFail,
    adminProductsRequest,
    adminProductsSuccess,
    adminProductsFail,
    clearError
} = actions;

export default reducer;
