import { configureStore } from "@reduxjs/toolkit";
import { favoritesApi } from "./favoritesApi";
import { networksApi} from './networksApi';
import { stationsApi } from "./stationsApi";

export const store = configureStore({
    reducer: {
        [networksApi.reducerPath]: networksApi.reducer,
        [stationsApi.reducerPath]: stationsApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(networksApi.middleware)
            .concat(stationsApi.middleware)
            .concat(favoritesApi.middleware)
})