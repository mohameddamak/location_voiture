
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMarques, addMarque, delMarque, editMarque, fetchMarqueById } from "../service/MarqueService";
export const getMarques = createAsyncThunk(
  "marque/getMarques",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchMarques();
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createMarque = createAsyncThunk(
  "marque/createMarque",
  async (marque, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addMarque(marque);
      return res.data
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMarque = createAsyncThunk(
  "marque/deleteMarque",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await delMarque(id);
      return id;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const updateMarque = createAsyncThunk(
  "marque/updateMarque",
  async (marque, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const marqueId = marque.get("_id")
      const res = await editMarque(marqueId, marque);
      
      return res.data
    }
    catch (error) {
      console.error("Erreur lors de la mise à jour de la marque :", error);
      return rejectWithValue(error.message);
    }

  }
);

export const findMarqueByID = createAsyncThunk(
  "marque/findMarqueByID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchMarqueById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  });
export const marqueSlice = createSlice({
  name: 'marque',
  initialState: {
    marques: [],
    marque: {},
    isLoading: false,
    success: null,
    error: null,
  },


  extraReducers: (builder) => {
    //get Marques
    builder
      .addCase(getMarques.pending, (state, action) => {

        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMarques.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.marques = action.payload;
      })
      .addCase(getMarques.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur")
      })

      //insertion marque
      .addCase(createMarque.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createMarque.fulfilled, (state, action) => {

        state.marques.push(action.payload);
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      .addCase(createMarque.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = null;
      })
      //Modification marque
      .addCase(updateMarque.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateMarque.fulfilled, (state, action) => {
        state.marques = state.marques.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      //Delete marque
      .addCase(deleteMarque.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteMarque.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.marques = state.marques.filter((item) => item._id !== action.payload)

      })
      .addCase(deleteMarque.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Fectch marque
      .addCase(findMarqueByID.pending, (state, action) => {
        state.isLoading = true
        state.error = null;

      })
      .addCase(
        findMarqueByID.fulfilled, (state, action) => {
          state.isLoading = false
          state.error = null
          state.marque = action.payload;
        })

  }

}

)


export default marqueSlice.reducer;
