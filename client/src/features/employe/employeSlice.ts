import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Employe, InitialState } from './Employe'


const initialState: InitialState = {
    loading: false,
    employe: null,
    employes: [],
    error: null,
    success: false
}


export const getEmployes = createAsyncThunk('employe/getAll', async () => {
    return await axios.get('/api/employe/all')
        .then(result => result.data)
        .catch(error => error.message)
})

export const getEmployeById = createAsyncThunk('employe/getOne', async (id: string) => {
    return await axios.get(`/api/employe/one/${id}`)
        .then(result => result.data)
        .catch(error => error.message)
})

export const saveEmploye = createAsyncThunk('employe/save', async (employe: Employe, { rejectWithValue }) => {
    return await axios.post('/api/employe/save', employe)
        .then(result => result.data)
        .catch(error => rejectWithValue(error.response.data))
})

const employeSlice = createSlice({
    name: 'Employe',
    initialState,
    reducers: {
        resetState: (state) => {
            state.success = false
        }
    },
    extraReducers(builder) {

        builder.addCase(getEmployes.pending, state => {
            state.loading = true
        })

        builder.addCase(getEmployes.fulfilled, (state, action) => {
            state.loading = false
            state.employe = null
            state.employes = action.payload
            state.error = null
        })

        builder.addCase(getEmployes.rejected, (state, action) => {
            state.loading = false
            state.employe = null
            state.employes = []
            state.error = action.payload
        })


        builder.addCase(getEmployeById.pending, state => {
            state.loading = true
        })

        builder.addCase(getEmployeById.fulfilled, (state, action) => {
            state.loading = false
            state.employe = action.payload
            state.error = null
        })

        builder.addCase(getEmployeById.rejected, (state, action) => {
            state.loading = false
            state.employe = null
            state.error = action.payload
        })


        builder.addCase(saveEmploye.pending, state => {
            state.loading = true
        })

        builder.addCase(saveEmploye.fulfilled, (state, action) => {
            state.loading = false
            state.employe = null
            state.employes.push(action.payload)
            state.error = null
            state.success = true
        })

        builder.addCase(saveEmploye.rejected, (state, action) => {
            state.loading = false
            state.employe = null
            state.error = action.payload
            state.success = false
        })
    },

})


export default employeSlice.reducer
export const { resetState } = employeSlice.actions