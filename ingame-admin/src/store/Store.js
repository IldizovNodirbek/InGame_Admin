import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./HeaderSlice";
import Purchases from "./PurchasesSlice";

 const store = configureStore({
  reducer: {
    header: headerReducer,
    purchases: Purchases,
  },
});

export default store;