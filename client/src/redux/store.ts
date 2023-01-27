import { configureStore } from '@reduxjs/toolkit'
import EmployeReducer from '../features/employe/employeSlice'

export const store = configureStore({
    reducer: {
        Employe: EmployeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch