import {
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_SUCCESS
} from "../actions/actions";

const initialState = {
  data: [],
  loading: false
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
    default:
      return state;
  }
};

export default marilynReducer;
