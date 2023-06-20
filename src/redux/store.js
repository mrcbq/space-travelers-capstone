import { configureStore } from '@reduxjs/toolkit';
import fetchRockets from './Rocket/RocketSlice';

const store = configureStore({
  reducer: {
    // Add reducers here if you have any but I don't have
  },
});

// Fetch rockets when the application starts
store.dispatch(fetchRockets);

export default store;
