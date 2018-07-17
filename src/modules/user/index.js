import { createModule } from 'redux-modux';

const initialState = {
  firstName: '',
  lastName: '',
  age: ''
};

const updateValueUser = (state, action) => ({
  ...state,
  firstName: action.firstName,
  lastName: action.lastName,
  age: action.age
});

const handlers = {
  updateValueUser
};

export default createModule(initialState, handlers);
