import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVoitures, addVoiture, delVoiture, editVoiture, fetchVoitureById } from "../service/VoitureService";
export const getVoitures = createAsyncThunk(
  "voiture/getVoitures",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchVoitures();
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createVoiture = createAsyncThunk(
  "voiture/createVoiture",
  async (voiture, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addVoiture(voiture);
      return res.data
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteVoiture = createAsyncThunk(
  "voiture/deleteVoiture",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await delVoiture(id);
      return id;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const updateVoiture = createAsyncThunk(
  "voiture/updateVoiture",
  async (voiture, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const voitureId = voiture.get("_id")
      const res = await editVoiture(voitureId, voiture);
      return res.data

    }
    catch (error) {
      console.error("Erreur lors de la mise à jour de la marque :", error);
      return rejectWithValue(error.message);
    }

  }
);


export const findVoitureByID = createAsyncThunk(
  "voiture/findVoitureByID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchVoitureById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  });
export const VoitureSlice = createSlice({
  name: 'voiture',
  initialState: {
    voitures: [],
    voiture: {},
    isLoading: false,
    success: null,
    error: null,
  },


  extraReducers: (builder) => {
    //get Voitures
    builder
      .addCase(getVoitures.pending, (state, action) => {

        state.isLoading = true;
        state.error = null;
      })
      .addCase(getVoitures.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.options = action.payload
        state.marques = action.payload;
        state.voitures = action.payload;
      })
      .addCase(getVoitures.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur")
      })

      //insertion voiture
      .addCase(createVoiture.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createVoiture.fulfilled, (state, action) => {

        state.voitures.push(action.payload);
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      .addCase(createVoiture.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = null;
      })
      //Modification voiture
      .addCase(updateVoiture.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateVoiture.fulfilled, (state, action) => {
        state.voitures = state.voitures.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      //Delete voiture
      .addCase(deleteVoiture.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteVoiture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.voitures = state.voitures.filter((item) => item._id !== action.payload)

      })
      .addCase(deleteVoiture.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Fectch voiture
      .addCase(findVoitureByID.pending, (state, action) => {
        state.isLoading = true
        state.error = null;

      })
      .addCase(
        findVoitureByID.fulfilled, (state, action) => {
          state.isLoading = false
          state.error = null
          state.voiture = action.payload;
        })

  }

}

)


export default VoitureSlice.reducer;
