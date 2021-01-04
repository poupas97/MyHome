import React, { useEffect, useReducer } from 'react';

import List, { ColumnType } from '../containers/List';
import { InitialState } from '../store/factory';
import actions, { sensorReducer } from '../store/sensor';

export const SENSOR_LIST_ROUTE = '/sensors';

const SensorList = () => {
  const [{ list, loading }, dispatch] = useReducer(sensorReducer, InitialState);
  const { listSensor, resetSensor } = actions(dispatch);

  useEffect(() => () => resetSensor(), []);

  useEffect(() => {
    listSensor();
  }, []);

  const headers = [
    { text: 'Name', value: 'name' },
    { text: 'Options', type: ColumnType.CONTEXT, values: [
      { text: 'details', /*link: RECIPES_DETAILS_ROUTE*/ }] },
  ];

  return (
    <List
      headers={headers}
      rows={list}
      loading={loading}
    />
  );
};

export default SensorList;
