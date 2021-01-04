import Api from '../api/Api';
import { generateActions, generateReducer } from './factory';

const ACTIONS = generateActions('sensors');

export const sensorReducer = generateReducer(ACTIONS);

const resetSensor = async dispatch => {
  dispatch({ type: ACTIONS.Reset });
};

const listSensor = async dispatch => {
  try {
    dispatch({ type: ACTIONS.Loading });

    const data = await Api.Get('sensors/');

    dispatch({ type: ACTIONS.List, payload: data });
  } catch (error) {
    dispatch({ type: ACTIONS.Error, payload: error });
  }
};

const getSensor = async (dispatch, id) => {
  dispatch({ type: ACTIONS.Loading });
  const data = await Api.Get(`sensors/${id}/`);
  dispatch({ type: ACTIONS.Item, payload: data });
};

export default dispatch => ({
  resetSensor: () => resetSensor(dispatch),
  listSensor: () => listSensor(dispatch),
  getSensor: () => getSensor(dispatch),
});
