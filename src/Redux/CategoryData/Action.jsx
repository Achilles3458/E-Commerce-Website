import axios from 'axios'

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
 
export const dataLoading = () => ({
    type : DATA_LOADING
});

export const dataSuccess = (payload) => ({
    type : DATA_SUCCESS,
    payload
});

export const dataFailure =() => ({
    type: DATA_FAILURE
})



export const dataGet = (data) => (dispatch)=> {
    dispatch(dataLoading())
axios.get(`https://gold-cygnet-kilt.cyclic.app/product/${data.id}`, {
      params: {
        sorting: data.sortby,   
        sizes_like: data.size,
        'discount': data.discount11,
        rating: data.rating11
      }
    })
    .then((res) => dispatch(dataSuccess(res.data)))
    .catch((err) => dispatch(dataFailure()))
  
}
