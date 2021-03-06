import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const initialState = {
  campaigns: {},
  gettingCampaigns: false,
  errors: {}
};


function addPromiseThunkSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch);
    } if (typeof action === 'function') {
      return action(dispatch);
    }
    return dispatch(action);
  };
}

const composeEnhancers = composeWithDevTools({realtime: true});

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);

store.dispatch = addPromiseThunkSupport(store);

export default store;
