import {
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE
} from "../actions/actions";

const initialState = {
  data: [],
  loading: true,
  error: ""
};

const marilynReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default marilynReducer;
