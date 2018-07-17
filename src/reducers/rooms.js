import _ from 'lodash';
import { RECEIVED_PROJECT_JSON } from '../actions/actionTypes';

const initialState = {
  project: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_PROJECT_JSON:
      return {
        ...state,
        project: _.get(action, 'data')
      };
    default:
      return state;
  }
};
