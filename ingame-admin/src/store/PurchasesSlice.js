import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchasesList: [
    {
      id: 1,
      clientName: "Ali Valiyev",
      phone: "+998901234567",
      productCount: 3,
      status: "New",
    },
    {
      id: 2,
      clientName: "Olim Xusanov",
      phone: "+998939876543",
      productCount: 1,
      status: "Finished",
    },
  ],
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    deletePurchase: (state, action) => {
      state.purchasesList = state.purchasesList.filter(
        (purchase) => purchase.id !== action.payload
      );
    },
    updatePurchase: (state, action) => {
      const index = state.purchasesList.findIndex(
        (purchase) => purchase.id === action.payload.id
      );
      if (index !== -1) {
        state.purchasesList[index] = action.payload;
      }
    },
  },
});

export const { deletePurchase, updatePurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;
