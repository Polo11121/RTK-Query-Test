import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CollectionsList,
  CreatorsList,
  GamesList,
  Youtube,
} from "../../helpers/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Games", "Trailers", "Creators", "Developers"],
  endpoints: (builder) => ({
    getGames: builder.query<
      GamesList,
      { tag: string; params: Record<string, any> }
    >({
      query: ({ params }) => ({
        url: `${import.meta.env.VITE_RAWG_API}/games`,
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
          page_size: 40,
          ...params,
        },
      }),

      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.tag;
      },

      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
        currentCache.next = newItems.next;
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.params.page !== previousArg?.params.page;
      },
    }),
    getCreators: builder.query<
      CreatorsList,
      { tag: string; params: Record<string, any> }
    >({
      query: ({ params }) => ({
        url: `${import.meta.env.VITE_RAWG_API}/creators`,
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
          page_size: 40,
          ...params,
        },
      }),

      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.tag;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
        currentCache.next = newItems.next;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.params.page !== previousArg?.params.page;
      },
    }),
    getCollections: builder.query<
      CollectionsList,
      { tag: string; params: Record<string, any> }
    >({
      query: ({ params }) => ({
        url: `${import.meta.env.VITE_RAWG_API}/collections`,
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
          page_size: 40,
          ...params,
        },
      }),

      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.tag;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
        currentCache.next = newItems.next;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.params.page !== previousArg?.params.page;
      },
    }),
    getGameTrailer: builder.query<Youtube, string>({
      query: (gameName) => ({
        url: import.meta.env.VITE_YOUTUBE_API,
        params: {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          part: "snippet",
          maxResults: 1,
          q: gameName,
        },
      }),
      providesTags: (result, error, arg) => [{ type: "Trailers", id: arg }],
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetCreatorsQuery,
  useGetCollectionsQuery,
  useGetGameTrailerQuery,
} = apiSlice;
