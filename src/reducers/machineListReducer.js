import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function machineListReducer( 
  state = initialState.machines, action) {
  switch (action.type) {
    case actionTypes.GET_MACHINES_SUCCESS:
      return action.payload
    default:
      return state;
  }
  
}
