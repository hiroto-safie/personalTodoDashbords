import { combineReducers } from "@reduxjs/toolkit";

import { addTaskReducer } from "./addTaskReducer";
import { deleteTaskReducer } from "./deleteTaskReducer";
import { editTaskReducer } from "./editTaskReducer";

export const rootReducer = combineReducers({
    addTaskReducer,
    deleteTaskReducer,
    editTaskReducer
})