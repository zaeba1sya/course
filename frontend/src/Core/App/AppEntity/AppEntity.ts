import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { withHelperReducers, withHelperState } from '../../../helpers/coreHelpers';
import type { IWithHelperState } from '../../../helpers/coreHelpers';

import type { IAppEntityState } from './AppEntity.interfaces';


const initialState: IAppEntityState & IWithHelperState = {
    ...withHelperState,
    language: "ru",
    theme: "light"
}

export const AppEntity = createSlice({
    name: "AppEntity",
    initialState,
    reducers: {
        ...withHelperReducers,
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        },
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
    }
});