import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640dee531a18a5db83838fc0.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', userData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
