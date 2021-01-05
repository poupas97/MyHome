import Home, { HOME_ROUTE } from './Home';
import SensorCreate, { SENSOR_CREATE_ROUTE } from './SensorCreate';
import SensorList, { SENSOR_LIST_ROUTE } from './SensorList';

const Routes = {
  HOME: { path: HOME_ROUTE, component: Home, title: 'Home' },
  SENSORS_LIST: { path: SENSOR_LIST_ROUTE, component: SensorList, title: 'Sensors' },
  SENSORS_CREATE: { path: SENSOR_CREATE_ROUTE, component: SensorCreate },
};

export default Routes;
