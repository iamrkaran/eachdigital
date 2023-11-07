// store.js
import rootReducer from '@/auth/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // This is the storage key for your persisted state.
  storage,      // You've correctly imported the storage engine (e.g., localStorage).

  // Optionally, you can configure blacklist or whitelist specific reducers for persistence.
  // blacklist: ['reducerToExclude'],
  // whitelist: ['reducerToPersist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // You can add other store configuration options here if needed.
});

const persistor = persistStore(store);

export { store, persistor };
