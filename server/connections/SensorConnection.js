const { select, selectSinge, insert, update, remove } = require('../config/connection');

const TABLE = 'sensors';

const BdKeys = {
  KEY_BD_ID: 'id',
  KEY_BD_NAME: 'name',
  KEY_BD_CREATED: 'created',
  KEY_BD_MODIFIED: 'modified',
};

const ObjectKeys = {
  KEY_ID: 'id',
  KEY_NAME: 'name',
  KEY_CREATED: 'created',
  KEY_MODIFIED: 'modified',
};

const sensorToBd = type => {
  const toSend = {
    [BdKeys.KEY_BD_ID]: type[ObjectKeys.KEY_ID],
    [BdKeys.KEY_BD_NAME]: type[ObjectKeys.KEY_NAME],
    [BdKeys.KEY_BD_CREATED]: type[ObjectKeys.KEY_CREATED],
    [BdKeys.KEY_BD_MODIFIED]: type[ObjectKeys.KEY_MODIFIED],
  };
  Object.entries(toSend).forEach(([key, value]) => {
    if (value === undefined) delete toSend[key];
  });
  return toSend;
};

const bdToSensor = (type = {}) => {
  const toSend = {
    [ObjectKeys.KEY_ID]: type[BdKeys.KEY_BD_ID],
    [ObjectKeys.KEY_NAME]: type[BdKeys.KEY_BD_NAME],
    [ObjectKeys.KEY_CREATED]: type[BdKeys.KEY_BD_CREATED],
    [ObjectKeys.KEY_MODIFIED]: type[BdKeys.KEY_BD_MODIFIED],
  };
  Object.entries(toSend).forEach(([key, value]) => {
    if (value === undefined) delete toSend[key];
  });
  return toSend;
};

const listSensors = async () => {
  const types = await select(TABLE);
  return types.map(bdToSensor);
};

const singleSensorById = async id => {
  const [type] = await selectSinge(TABLE, [{ prop: BdKeys.KEY_BD_ID, operator: '=', value: id } ]);
  return bdToSensor(type);
};

const createSensor = async type => await insert(TABLE, sensorToBd(type));

const updateSensor = async (type, id) => await update(TABLE, sensorToBd(type), id);

const deleteSensor = async id => await remove(TABLE, id);

module.exports = ({ listSensors, singleSensorById, createSensor, updateSensor, deleteSensor });
