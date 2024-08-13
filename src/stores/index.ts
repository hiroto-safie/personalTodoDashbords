import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['your/action/type'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.dueDate'],
        },
    }),
})

export default store