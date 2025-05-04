import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counter.slice';
import {pokemonApi} from './services/pokeman';
import {setupListeners} from '@reduxjs/toolkit/query';

// Create the store with the counter reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([pokemonApi.middleware]), // Add any additional middleware here
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
