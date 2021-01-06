import { bool, func, object } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Form, { FormInputType } from '../containers/Form';
import { getSensorAction, saveSensorAction } from '../store/sensor';
import { selectorsSensor } from '../store/sensor';
import { SENSOR_LIST_ROUTE } from './SensorList';

export const SENSOR_EDIT_ROUTE = '/sensors/edit/:id';

const SensorEdit = ({
  history, item, sensor, update, saved, error, loading, match: { params: { id } } }) => {

  useEffect(() => {
    if (!sensor) item(id);
  }, [sensor, item, id]);

  const goBack = useCallback(() => {
    history.push(SENSOR_LIST_ROUTE);
  }, [history]);

  useEffect(() => {
    if (saved) goBack();
  }, [saved, goBack]);

  const inputs = [
    { text: 'Name', value: 'name', type: FormInputType.TEXT },
  ];

  return (
    <Form
      data={sensor}
      inputs={inputs}
      onSubmit={update}
      title="Update a Sensor"
      onCancel={goBack}
      error={error}
      loading={loading}
    />
  );
};

SensorEdit.propTypes = {
  history: object, // eslint-disable-line key-spacing
  item: func,
  reset: func,
  sensor: object, // eslint-disable-line key-spacing
  update: func,
  saved: bool,
  error: bool,
  loading: bool,
  match: object, // eslint-disable-line key-spacing
};

const mapStateToProps = state => {
  const data = selectorsSensor(state);
  return ({
    sensor: data.item,
    saved: data.saved,
    error: data.error,
    loading: data.loading,
  });
};

const mapDispatchToProps = dispatch => ({
  item: id => getSensorAction(dispatch, id),
  update: sensor => saveSensorAction(dispatch, sensor),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SensorEdit);
