import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMember: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find(
        (mission) => mission.mission_id === missionId,
      );
      mission.isMember = !mission?.isMember ?? false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    });
  },
});

export const { toggleMember } = missionsSlice.actions;
export default missionsSlice.reducer;
