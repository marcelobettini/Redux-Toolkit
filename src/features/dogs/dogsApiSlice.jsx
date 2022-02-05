const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  //este primer param le ayudará al código a saber, cuando lo agreguemos a un store,
  //dónde estamos guardando los datos en los reducers
  reducerPath: "api",
  //el segundo argumento indica cómo obtendremos los datos (Fetch, AXIOS... RTK viene
  //con su propio wrapper: fetchBaseQuery)
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.thedogapi.com/v1`,
    //como esta API requiere auth le vamos a pasar nuestra key como un header
    //prepareHeaders es una función que setea los headers y los retorna
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  //el tercer argumento es una función que recibe como parámetro un constructor
  //con el que vamos a crear nuestros endpoints. En este proceso pasaremos un
  //query param (limit) y el endpoint
  endpoints(builder) {
    return {
      fetchBreeds: builder.query({
        query(limit = 5) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
