import { array, bool, func } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import List from '../containers/List';
import { listSensorAction, resetSensorAction, selectorsSensor } from '../store/sensor';

export const SENSOR_LIST_ROUTE = '/sensors';

const SensorList = ({ sensors, loading, list, reset }) => {

  useEffect(() => () => reset(), [reset]);

  useEffect(() => {
    if (!sensors) list();
  }, [sensors, list]);

  const headers = [
    { text: 'Name', value: 'name' },
    { text: 'Created', value: 'created' },
    { text: 'Modified', value: 'modified' },
    /*{ text: 'Options', type: ColumnType.CONTEXT, values: [
      { text: 'details', link: RECIPES_DETAILS_ROUTE }] },*/
  ];

  return (
    <List
      headers={headers}
      rows={sensors}
      loading={loading}
    />
  );
};

SensorList.propTypes = {
  sensors: array,
  loading: bool,
  list: func,
  reset: func,
};

const mapStateToProps = state => ({
  sensors: selectorsSensor(state).list,
  loading: selectorsSensor(state).loading,
});

const mapActionsToProps = dispatch => ({
  list: () => listSensorAction(dispatch),
  reset: () => resetSensorAction(dispatch),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(SensorList);
