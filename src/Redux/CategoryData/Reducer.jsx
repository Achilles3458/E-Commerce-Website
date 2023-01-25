import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE } from "./Action"

const initState = {
    error: false,
    loading: false,
    categoryData:[]
};

export const categoryReducer = (store = initState, { type, payload }) => {
    // console.log("logincccc" , store)
    switch (type) {
        case DATA_LOADING:
            return { ...store, loading: true };

        case DATA_SUCCESS:
            return {
                ...store,
                error: false,
                loading: false,
                categoryData:[payload]
            };

        case DATA_FAILURE:
            return {
                ...initState,
                error: true,
                loading: false,
                categoryData:[]
            }

        default:
            return store
    }
}