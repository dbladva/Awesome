/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Hello from './Hello';
import textinput from './src/component/Input';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Hello);
