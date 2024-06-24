import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './reducer/adminReducer'
import classReducer from './reducer/classReducer'
import timetableReducer from './reducer/timetableReducer'
import teacherReducer from './reducer/teacherReducer'
import studentReducer from './reducer/studentReducer'
import teachertable from './reducer/teacherTable'
import calendarReducer from './reducer/calendarReducer'
import { basketReducer } from "./reducer/basketReducer";
import { productReducer } from "./reducer/productReducer";


export default combineReducers({
  blogs,
  admin,
  classReducer,
  timetableReducer,
  teacherReducer,
  teachertable,
  studentReducer,
  calendarReducer,
  basket:basketReducer,
  products:productReducer
})