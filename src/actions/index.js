import { CHANGE_APPLICATION_PAGE } from './actionTypes';

export const changePage = (targetPage) => ({
  type: CHANGE_APPLICATION_PAGE,
  targetPage
});

export default {};
