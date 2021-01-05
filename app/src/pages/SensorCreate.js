import { bool, func, object } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Form, { FormInputType } from '../containers/Form';
import { createSensorAction } from '../store/sensor';
import { selectorsSensor } from '../store/sensor';
import { SENSOR_LIST_ROUTE } from './SensorList';

export const SENSOR_CREATE_ROUTE = '/sensors/create';

const SensorCreate = ({ history, createSensor, saved, error, loading }) => {

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
      inputs={inputs}
      onSubmit={createSensor}
      title="Create a Sensor"
      onCancel={goBack}
      error={error}
      loading={loading}
    />
  );
};

SensorCreate.propTypes = {
  history:object, // eslint-disable-line key-spacing
  createSensor: func,
  saved: bool,
  error: bool,
  loading: bool,
};

const mapStateToProps = state => {
  const data = selectorsSensor(state);
  return ({
    saved: data.saved,
    error: data.error,
    loading: data.loading,
  });
};

const mapDispatchToProps = dispatch => ({
  createSensor: sensor => createSensorAction(dispatch, sensor)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SensorCreate);
