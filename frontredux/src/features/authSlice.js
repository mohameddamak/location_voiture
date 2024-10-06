import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {signup,signin} from "../service/AuthService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const register = createAsyncThunk(
"auth/register",
async (user, thunkAPI) => {
const { rejectWithValue } = thunkAPI;
try{
    console.log("user",user);
const res= await signup(user);
return res.data
}
catch (error) {
return rejectWithValue(error.data.message)
}});

export const login = createAsyncThunk(
"auth/login",
    async (user, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
    try {
    const res = await signin(user); 
       
    return res.data ;
    } 
    catch (error) {
        
        return rejectWithValue(error.response.data);
}});

export const logout = createAsyncThunk("auth/logout", () => {
localStorage.removeItem("CC_Token");
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
    user:null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errMsg: null,
    isLoggedIn:false,
  
    
},

reducers: {
    reset:(state)=>{
state.isLoading=false
state.isSuccess=false
state.isError=false
state.errorMessage=""
state.isLoggedIn=false
}
    
    },
    extraReducers: (builder) => {
        //get articles
    builder
    //insertion user
    .addCase(register.pending, (state, action) => {
    state.isLoading=true;
    
    })
    .addCase(register.fulfilled,(state, action) => {
        state.user=action.payload;
        state.isLoading=false;
        state.status=action.payload.success;
        state.isSuccess=true
        MySwal.fire({
            icon: 'success',
            title: 'inscription acceptée',
            })

        })
    .addCase(register.rejected,(state, action) => {
        state.isLoading=false;
        state.isError=true
        state.user=null
        MySwal.fire({
            icon: 'error',
            title: 'linscription est échouée',
            })
        })
    .addCase(login.pending, (state, action) => {
        state.isLoading=true;
        
            })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        localStorage.setItem("CC_Token",action.payload.token)
        //localStorage.setItem("CC_User",action.payload.user) j ai déja conservé mon travail avec l application persist

        MySwal.fire({
            icon: 'success',
            title: 'Connection was successful',
            })
        })
    .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      state.status=action.payload.message;
       
        MySwal.fire({
            icon: 'error',
            title: action.payload.message,
            })
            
        })
    .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        })
        
        }}
)
export const {reset} =authSlice.actions
export default authSlice.reducer;

