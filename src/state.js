import { combineReducers } from 'redux'
import 'ng-redux'
import reducers from './reducers'

angular.module('state', ['ngRedux'])
.config(($ngReduxProvider) => {
  let reducer = combineReducers(reducers);
  $ngReduxProvider.createStoreWith(reducer, []);
});
