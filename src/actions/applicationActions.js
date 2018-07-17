import { RECEIVED_PROJECT_JSON } from './actionTypes';
import { fetchJson, getFilePath } from '../utils';

export const handleInitApplication = () => async (dispatch) => {
  // do stuffs here
  const projectJson = await fetchJson(getFilePath('project.json'));
  dispatch({
    type: RECEIVED_PROJECT_JSON,
    data: projectJson
  });
};

export default {};
