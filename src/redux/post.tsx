import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IFetch {
  status: number;
  data: [];
}

interface IStateInitial {
  postList: {
    status: string;
    data: object;
    error: object;
  };
}

interface IPayload {
  payload: {};
}

export const fetchPostList = createAsyncThunk(
  "",

  async () => {
    const fetchData = await axios(
      "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-esp-front2-aula6-mesa3/posts"
    ).then((response: IFetch) => {
      if (response.status !== 200) {
        console.log("Erro");
      } else {
        console.log("Succeso");
        return response.data;
      }
    });

    return fetchData;
  }
);

// State inicial
const postInitialState: IStateInitial = {
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
    [fetchPostList.pending.type]: (state: IStateInitial) => {
      state.postList = {
        status: "carregando",
        data: {},
        error: {},
      };
    },

    [fetchPostList.fulfilled.type]: (
      state: IStateInitial,
      action: IPayload
    ) => {
      state.postList = {
        status: "sucesso",
        data: action.payload,
        error: {},
      };
    },

    [fetchPostList.rejected.type]: (state: IStateInitial, action: IPayload) => {
      state.postList = {
        status: "erro",
        data: {},
        error: action.payload,
      };
    },
  },
});

export default postSlice.reducer;
