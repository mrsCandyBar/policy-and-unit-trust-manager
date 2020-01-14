import { combineReducers } from 'redux'
import * as About from '../aboutStore'

export default combineReducers({
  about: About.reducer
});