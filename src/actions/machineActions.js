import * as actionTypes from './actionTypes';

export function getMachinesSuccess(machines){
  return { type: actionTypes.GET_MACHINES_SUCCESS, 
    payload: machines
}}

export function getMachines(category) {
  return function(dispatch) {
    let url = 'https://her-app-rails.herokuapp.com/leads';
    if (category){
      console.log(category)
      return fetch(url)
        .then(res => res.json() )
        .then( res => res.leads.filter( a => a.category_id === category) )
      .then(result => dispatch(getMachinesSuccess(result)));
    
    }
    return fetch(url)
      .then(res => res.json() )
      .then(res => res.leads )
      .then(result => dispatch(getMachinesSuccess(result)));
  };
}
