import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoritesApi = createApi({
    reducerPath: 'favorites',
    tagTypes: ['Favorites'],
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/`}),
    endpoints: (build) => ({
        getFavorites: build.query({
            query: () => `favorites`,
            providesTags: (result) => result 
            ? [
                ...result.map(({id}) => ({ type: 'Favorites', id })),
                { type: 'Favorites', id: 'LIST'}
            ]
            : [{type: 'Favorites', id: 'LIST'}]
        }),
        addFavorite: build.mutation({
            query: ({networkId, stationId}) => ({
                url: `favorites`,
                method: 'POST',
                body: { networkId, stationId }
            }),
            invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
        }),
        deleteFavorite: build.mutation({
            query: (id) => ({
                url: `favorites/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
        })
    })
});

export const { useGetFavoritesQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } = favoritesApi;
