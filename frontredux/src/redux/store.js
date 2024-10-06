import { configureStore } from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import authReducer from "../features/authSlice"
import marqueReducer from "../features/marqueSlice";
import optionReducer from "../features/optionSlice"
import voitureReducer from"../features/voitureSlice"
import reservtionReducer from"../features/reservationSlice"
const persistConfig = {
key: 'root',
version: 1,
storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)
 const store = configureStore({
  reducer: {
    
    storemarques:marqueReducer,
    storeoptions:optionReducer,
    storevoitures:voitureReducer,
    storereservation:reservtionReducer,
    auth:persistedReducer,
  },

middleware : [thunk] 
})
export default store