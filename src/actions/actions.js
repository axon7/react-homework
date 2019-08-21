import axios from "axios";

export const FETCH_PICTURES = "FETCH_PICTURES";
export const FETCH_PICTURES_PENDING = "FETCH_PICTURES_PENDING";
export const FETCH_PICTURES_SUCCESS = "FETCH_PICTURES_SUCCESS";
export const FETCH_PICTURES_FAILURE = "FETCH_PICTURES_FAILURE";

const URL =
  "https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=Marilyn%20Monroe&sort=sort=date-posted-desc";

var config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};
export const fetchPicturesPending = () => ({
  type: FETCH_PICTURES_PENDING
});

export const fetchPicturesSuccess = data => ({
  type: FETCH_PICTURES_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PICTURES_FAILURE,
  payload: { error }
});

export const fetchPictures = () => {
  return async dispatch => {
    try {
      await dispatch(fetchPicturesPending());
      const res = await axios.get(URL, config);
      await dispatch(fetchPicturesSuccess(res.data.items));
    } catch (error) {
      await dispatch(fetchProductsFailure(error));
    }

    console.log("success");
  };
};
