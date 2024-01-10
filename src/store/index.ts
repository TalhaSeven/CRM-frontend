import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import tokenReducer from "./apps/login/token";
import usersReducer from "./apps/user/index";
import { loginApi } from "../services/login";
import { userApi } from "../services/user";
import { enumsApi } from "../services/enums";
import { taskApi } from "../services/task";
import { calenderApi } from "../services/calender";

export const store = configureStore({
    reducer: {
        tokenState: tokenReducer,
        usersState: usersReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [enumsApi.reducerPath]: enumsApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer,
        [calenderApi.reducerPath]: calenderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            loginApi.middleware, userApi.middleware, enumsApi.middleware, taskApi.middleware, calenderApi.middleware
        ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
