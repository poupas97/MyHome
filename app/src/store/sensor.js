import get from 'lodash/get';
import has from 'lodash/has';

import Api from '../api/Api';
import { generateActions, generateReducer } from './factory';

const [ACTIONS_DISPATCH, ACTIONS_NAMES] = generateActions('sensors');

export const SENSORS = generateReducer(ACTIONS_NAMES);

export const selectorsSensor = state => state.SENSORS;

export const resetSensorAction = async dispatch => {
  ACTIONS_DISPATCH.Reset(dispatch);
};

export const listSensorAction = async dispatch => {
  try {
    ACTIONS_DISPATCH.Loading(dispatch);

    const payload = await Api.Get('sensors/');
    ACTIONS_DISPATCH.List(dispatch, payload);
  } catch (error) {
    ACTIONS_DISPATCH.Error(dispatch, error);
  }
};

export const getSensorAction = async (dispatch, id) => {
  try {
    ACTIONS_DISPATCH.Loading(dispatch);

    const payload = await Api.Get(`sensors/${id}/`);
    ACTIONS_DISPATCH.Item(dispatch, payload);
  } catch (error) {
    ACTIONS_DISPATCH.Error(dispatch, error);
  }
};

export const saveSensorAction = async (dispatch, sensor) => {
  try {
    ACTIONS_DISPATCH.Loading(dispatch);

    let saved;
    if (has(sensor, 'id')) {
      const { updated } = await Api.Put(`sensors/${get(sensor, 'id')}/`, sensor);
      saved = updated;
    } else {
      const { id } = await Api.Post('sensors/', sensor);
      saved = !!id;
    }

    ACTIONS_DISPATCH.Save(dispatch, saved);
  } catch (error) {
    ACTIONS_DISPATCH.Error(dispatch, error);
  }
};
