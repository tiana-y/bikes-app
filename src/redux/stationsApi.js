import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MAIN_URL } from '../config';

export const stationsApi = createApi({
    reducerPath: 'stations',
    baseQuery: fetchBaseQuery({ baseUrl: `${MAIN_URL}`}),
    endpoints: (build) => ({
        getStations: build.query({
            query: (networkId) => `networks/${networkId}`
        })
    })
});

export const { useGetStationsQuery } = stationsApi;
