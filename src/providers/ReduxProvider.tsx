import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import React from "react";

const store = configureStore({
    reducer: rootReducer
})

export const ReduxProvider: React.FC<{children: JSX.Element}> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}