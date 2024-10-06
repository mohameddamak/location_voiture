import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import{fetchReservations,addReservation,delReservation,editReservation,fetchReservationById} from"../service/ResevationService";
export const getReservations = createAsyncThunk(
    "reservation/getReservations",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
      const res = await fetchReservations();
      return res.data;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const createReservation = createAsyncThunk(
    "reservation/createReservation",
    async (reservation, thunkAPI) => { 
      const { rejectWithValue } = thunkAPI;
      try{
      const res= await addReservation(reservation);
      console.log("res.data",res.data);
      return res.data
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    }
  );
  
  export const deleteReservation = createAsyncThunk(
    "reservation/deleteReservation",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await delReservation(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });

  export const updateReservation = createAsyncThunk(
      "reservation/updateReservation",
      async (reservation, thunkAPI) => { 
      const { rejectWithValue } = thunkAPI;
        try{ 
       const res= await editReservation(reservation);
        return res.data
      
      }
      catch (error) { 
        return rejectWithValue(error.message);
      }
     
      }
    );

  export const findReservationByID = createAsyncThunk(
    "reservation/findReservationByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await fetchReservationById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState:{
    reservations:[],
    reservation:{},
    isLoading: false,
    success:null,
    error:null,
  },
  
  
  extraReducers: (builder) => {
    //get Reservations
    builder
    .addCase(getReservations.pending, (state, action) => {
    
      state.isLoading=true;
      state.error=null;
    })
    .addCase(getReservations.fulfilled, (state, action) => {
      state.isLoading=false;
      state.error = null;
      state.marques=action.payload
      state.voitures=action.payload;
      state.reservations=action.payload;
    })
    .addCase(getReservations.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;
      console.log("impossible de se connecter au serveur")
    })

    //insertion reservation
    .addCase(createReservation.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;
      state.success=null;
    })
    .addCase(createReservation.fulfilled, (state, action) => {
     
      state.reservations.push(action.payload);
      state.isLoading=false;
      state.error=null;
      state.success=action.payload;
    })
    .addCase(createReservation.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;
      state.success=null;
    })
    //Modification reservation
    .addCase(updateReservation.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;  
      state.success=null;  
    })
    .addCase(updateReservation.fulfilled, (state, action) => { 
      state.reservations = state.reservations.map((item) =>
      item._id === action.payload._id ? action.payload : item
    ); 
  state.isLoading=false;
  state.error=null; 
  state.success=action.payload;
     })
    //Delete reservation
    .addCase(deleteReservation.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;     
    })
    .addCase(deleteReservation.fulfilled, (state, action) => {
      state.isLoading=false;
      state.error=null;   
      state.reservations=state.reservations.filter((item)=> item._id!==action.payload)
    
    })
    .addCase(deleteReservation.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;          
    })
  //Fectch reservation
    .addCase(findReservationByID.pending, (state, action) => {
      state.isLoading = true
      state.error=null;   
        
      })
    .addCase(
     findReservationByID.fulfilled,(state, action) => {
      state.isLoading = false
      state.error = null
      state.reservation=action.payload;
   })
   
  }

  }
  
)


export default reservationSlice.reducer;
