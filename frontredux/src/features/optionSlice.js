import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import{fetchOptions,addOption,delOption,fetchOptionById, editOption} from"../service/OptionService";
export const getOptions = createAsyncThunk(
    "option/getOptions",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
      const res = await fetchOptions();
      return res.data;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const createOption = createAsyncThunk(
    "option/createOption",
    async (option, thunkAPI) => { 
      const { rejectWithValue } = thunkAPI;
      try{
      
      const res= await addOption(option);
      return res.data
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    }
  );
  
  export const deleteOption = createAsyncThunk(
    "option/deleteOption",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await delOption(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });

  export const updateOption = createAsyncThunk(
      "option/updateOption",
      async (option, thunkAPI) => { 
      const { rejectWithValue } = thunkAPI;
      try {
        const optionId = option.get("_id")
        const res = await editOption(optionId, option);
        return res.data
  
      }
      catch (error) { 
        return rejectWithValue(error.message);
      }
     
      }
    );

  export const findOptionByID = createAsyncThunk(
    "option/findOptionByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await fetchOptionById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
export const optionSlice = createSlice({
  name: 'option',
  initialState:{
    options:[],
    option:{},
    isLoading: false,
    success:null,
    error:null,
  },
  
  
  extraReducers: (builder) => {
    //get Options
    builder
    .addCase(getOptions.pending, (state, action) => {
    
      state.isLoading=true;
      state.error=null;
    })
    .addCase(getOptions.fulfilled, (state, action) => {
      state.isLoading=false;
      state.error = null;
      state.options=action.payload;
    })
    .addCase(getOptions.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;
      console.log("impossible de se connecter au serveur")
    })

    //insertion option
    .addCase(createOption.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;
      state.success=null;
    })
    .addCase(createOption.fulfilled, (state, action) => {
     
      state.options.push(action.payload);
      state.isLoading=false;
      state.error=null;
      state.success=action.payload;
    })
    .addCase(createOption.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;
      state.success=null;
    })
    //Modification option
    .addCase(updateOption.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;  
      state.success=null;  
    })
    .addCase(updateOption.fulfilled, (state, action) => { 
      state.options = state.options.map((item) =>
      item._id === action.payload._id ? action.payload : item
    ); 
  state.isLoading=false;
  state.error=null; 
  state.success=action.payload;
     })
    //Delete option
    .addCase(deleteOption.pending, (state, action) => {
      state.isLoading=true;
      state.error=null;     
    })
    .addCase(deleteOption.fulfilled, (state, action) => {
      state.isLoading=false;
      state.error=null;   
      state.options=state.options.filter((item)=> item._id!==action.payload)
    
    })
    .addCase(deleteOption.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.payload;          
    })
  //Fectch option
    .addCase(findOptionByID.pending, (state, action) => {
      state.isLoading = true
      state.error=null;   
        
      })
    .addCase(
     findOptionByID.fulfilled,(state, action) => {
      state.isLoading = false
      state.error = null
      state.option=action.payload;
   })
   
  }

  }
  
)


export default optionSlice.reducer;
