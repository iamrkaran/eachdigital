import rootReducer from '@/auth/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  // Add blacklist or whitelist if needed
  // blacklist: ['reducerToExclude'],
  // whitelist: ['reducerToPersist'],
};

// Wrap the root reducer with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  // Add other store configuration options here if needed.
});

// Create the persistor for persisting state
const persistor = persistStore(store);

export { store, persistor };
