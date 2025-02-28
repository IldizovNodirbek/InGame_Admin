import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalApplications: 0, // Umumiy arizalar
  approvedApplications: 0, // Javob berilganlar
  rejectedApplications: 0, // Rad etilganlar
  websiteVisits: [
    { name: "Yan", visits: 0 },
    { name: "Fev", visits: 0 },
    { name: "Mar", visits: 0 },
    { name: "Apr", visits: 0 },
    { name: "May", visits: 0 },
    { name: "Iyun", visits: 0 },
  ],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    incrementTotalApplications: (state) => {
      state.totalApplications += 1;
    },
    incrementApprovedApplications: (state) => {
      state.approvedApplications += 1;
    },
    incrementRejectedApplications: (state) => {
      state.rejectedApplications += 1;
    },
    updateWebsiteVisits: (state, action) => {
      state.websiteVisits = action.payload;
    },
  },
});

export const {
  incrementTotalApplications,
  incrementApprovedApplications,
  incrementRejectedApplications,
  updateWebsiteVisits,
} = headerSlice.actions;

export default headerSlice.reducer;
