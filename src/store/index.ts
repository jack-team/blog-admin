import {
    Store,
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import {
    persistStore,
    persistReducer
} from 'redux-persist';

import thunk from 'redux-thunk';
import reducers from './reducer';
import connect from './connect';
import storage from 'redux-persist/lib/storage';

const createStoreAsync = (
    applyMiddleware(thunk)(createStore)
);

const opts:any = {
    key: 'blog_v1',
    storage: storage
};

const store: Store = createStoreAsync(
    persistReducer(opts, combineReducers(reducers))
);

const persist = persistStore(store);

export default store;

export {
    connect,
    persist
}