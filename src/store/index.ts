import { configureStore } from "@reduxjs/toolkit";
import login from '@/store/apps/login'

export const store = configureStore({
  reducer: {
    login,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
