import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./slices/AccountSlice";
import fetchAllCashDividendReducer from "./slices/CashDividendRecordSlice";
import mainPageReducer from "./slices/MainPageSlice";
import memoReducer from "./slices/MemoSlice";
import settingsPageReducer from "./slices/SettingsPageSlice";
import stockInfoReducer from "./slices/StockInfoSlice";
import toastReducer from "./slices/ToastSlice";
import tradePlanReducer from "./slices/TradePlanSlice";
import tradeRecordReducer from "./slices/TradeRecordSlice";

export const store = configureStore({
  reducer: {
    settingsPage: settingsPageReducer,
    account: accountReducer,
    tradeRecord: tradeRecordReducer,
    cashDividend: fetchAllCashDividendReducer,
    stockInfo: stockInfoReducer,
    tradePlan: tradePlanReducer,
    memo: memoReducer,
    toast: toastReducer,
    mainPage: mainPageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
