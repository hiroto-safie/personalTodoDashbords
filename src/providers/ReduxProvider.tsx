import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import React from "react";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['your/action/type'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.dueDate'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
        },
    }),
})

export const ReduxProvider: React.FC<{children: JSX.Element}> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}