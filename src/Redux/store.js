import { configureStore } from '@reduxjs/toolkit';
import userSliceReduces from './Slice/employeeSlice';

export const store = configureStore({
    reducer: {
        users: userSliceReduces
    }
});