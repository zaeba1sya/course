import type { PayloadAction } from '@reduxjs/toolkit';

export interface IWithHelperState {
    isLoading: boolean;
    isSubmitLoading: boolean;
    error: string;
}

export const withHelperState: IWithHelperState = {
    isLoading: false,
    isSubmitLoading: false,
    error: ''
}

export const withHelperReducers = {
    setLoading(state: IWithHelperState, actions: PayloadAction<boolean>) {
        state.isLoading = actions.payload;
    },
    setSubmitLoading(state: IWithHelperState, actions: PayloadAction<boolean>) {
        state.isSubmitLoading = actions.payload;
    },
    setError(state: IWithHelperState, actions: PayloadAction<string>) {
        state.error = actions.payload;
    }
}