import changeTheNumber from "./inc-dec-reducer";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeTheNumber
    }
);

export default reducers;