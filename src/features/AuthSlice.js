import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productService";
import user from '../../public/data/Product.json';

export const fetchUsers = createAsyncThunk("users", async () => {
  return await productService.fetchUsers();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user : [],
    userType: [],
    users: user.users,  
  },
  reducers: {
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userType = action.payload.userType;

      state.users.push({ ...action.payload.user, userType: action.payload.userType, status: 'active' });
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userType = action.payload.userType;
    },
    
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.userType = null;
    },
    toggleUserStatus: (state, action) => {
      const userIndex = state.users.findIndex(user => user.email === action.payload.email);
      if (userIndex !== -1) {
        state.users[userIndex].status = state.users[userIndex].status === 'active' ? 'inactive' : 'active';
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers:(builder)=>
    {
builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const { signup, login, logout, toggleUserStatus,setStatus } = authSlice.actions;
export default authSlice.reducer;
