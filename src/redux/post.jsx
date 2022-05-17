import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostList = createAsyncThunk(
  "",

  async () => {
    const fetchData = await axios(
      "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-esp-front2-aula6-mesa3/posts"
    ).then((response) => {
      if (response.status !== 200) {
        console.error("Erro");
        return {};
      } else {
        console.log("Succeso");
        return response.data;
      }
    });

    return fetchData;
  }
);

// State inicial
const postInitialState = {
  postList: {
    status: "inativo",
    data: {},
    error: {},
  },
};

// Reducers
const postSlice = createSlice({
  name: "post",
  initialState: postInitialState,

  // Async reducers
  extraReducers: {
    [fetchPostList.pending.type]: (state) => {
      state.postList = {
        status: "carregando",
        data: {},
        error: {},
      };
    },

    [fetchPostList.fulfilled.type]: (state, action) => {
      state.postList = {
        status: "sucesso",
        data: action.payload,
        error: {},
      };
    },

    [fetchPostList.rejected.type]: (state, action) => {
      state.postList = {
        status: "erro",
        data: {},
        error: action.payload,
      };
    },
  },
});

export default postSlice.reducer;
