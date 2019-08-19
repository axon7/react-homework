import axios from "axios";

export const FETCH_PICTURES = "FETCH_PICTURES";
export const SHOW_PROFILE = "SHOW_PROFILE";
export const FETCH_PICTURES_PENDING = "FETCH_PICTURES_PENDING";
export const FETCH_PICTURES_SUCCESS = "FETCH_PICTURES_SUCCESS";

const URL =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=Marilyn%20Monroe&sort=sort=date-posted-desc";

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

export const showProfile = () => ({
  type: SHOW_PROFILE
});

export const fetchPictures = () => {
  return async dispatch => {
    try {
      const res = await axios.get(URL, config);
      await dispatch(fetchPicturesSuccess(res.data.items));
      await console.log(res.data.items);
    } catch (error) {
      console.log("failed");
    }

    console.log("success");
  };
};
