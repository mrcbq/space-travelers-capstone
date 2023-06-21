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
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.id === missionId) {
          return { ...mission, isMember: true };
        }
        return mission;
      });
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

export default missionsSlice.reducer;
