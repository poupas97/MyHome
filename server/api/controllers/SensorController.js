const SensorConnection = require('../../connections/SensorConnection');
const { ErrorMapper, errorDtoSimple } = require('../../dto/ErrorDTO');

const listSensors = async (req, res) => {
  try {
    const result = await SensorConnection.listSensors();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(errorDtoSimple(error));
  }
};

const singleSensorById = async (req, res) => {
  try {
    const { params: { id } } = req;

    if (!id) return res.status(500).json(errorDtoSimple(ErrorMapper.MISS_ID));

    const result = await SensorConnection.singleSensorById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(errorDtoSimple(error));
  }
};

const createSensor = async (req, res) => {
  try {
    const { body } = req;
    const result = await SensorConnection.createSensor(body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(errorDtoSimple(error));
  }
};

const updateSensor = async (req, res) => {
  try {
    const { body, params: { id } } = req;

    if (!id) return res.status(500).json(errorDtoSimple(ErrorMapper.MISS_ID));

    const result = await SensorConnection.updateSensor(body, id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(errorDtoSimple(error));
  }
};

const deleteSensor = async (req, res) => {
  try {
    const { params: { id } } = req;

    if (!id) return res.status(500).json(errorDtoSimple(ErrorMapper.MISS_ID));

    const result = await SensorConnection.deleteSensor(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(errorDtoSimple(error));
  }
};

module.exports = () => ({ listSensors, singleSensorById, createSensor, updateSensor,
  deleteSensor });
