import Home, { HOME_ROUTE } from './Home';
import SensorList, { SENSOR_LIST_ROUTE } from './SensorList';

const Routes = {
  HOME: { path: HOME_ROUTE, component: Home, title: 'Home' },
  SENSORS_LIST: { path: SENSOR_LIST_ROUTE, component: SensorList, title: 'Sensors' },
};

export default Routes;
