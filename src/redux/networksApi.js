import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MAIN_URL } from '../config';

export const networksApi = createApi({
    reducerPath: 'networks',
    baseQuery: fetchBaseQuery({ baseUrl: `${MAIN_URL}`}),
    endpoints: (build) => ({
        getNetworks: build.query({
            query: () => `networks`
        })
    })
});

export const { useGetNetworksQuery } = networksApi;
