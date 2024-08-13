import { Provider } from "react-redux";
import store from "../stores";
import React from "react";

export const ReduxProvider: React.FC<{children: JSX.Element}> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}