import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getUserById, deleteUser, addUser } from './users-operations';

const users = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, store => {
        store.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (store, { payload }) => {
        store.users = payload;
        store.isLoading = false;
      })
      .addCase(getUsers.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(getUserById.pending, store => {
        store.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.currentUser = payload;
      })
      .addCase(getUserById.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(deleteUser.pending, store => {
        store.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.users = store.users.filter(user => user.id !== payload);
      })
      .addCase(deleteUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addUser.pending, store => {
        store.isLoading = true;
      })
      .addCase(addUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.users.push(payload);
      })
      .addCase(addUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default users.reducer;
