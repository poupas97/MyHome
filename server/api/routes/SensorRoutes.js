module.exports = app => {
  const controller = require('../controllers/SensorController')();

  app.route('/api/sensors').get(controller.listSensors);
  app.route('/api/sensors/:id').get(controller.singleSensorById);
  app.route('/api/sensors').post(controller.createSensor);
  app.route('/api/sensors/:id').put(controller.updateSensor);
  app.route('/api/sensors/:id').delete(controller.deleteSensor);
};
