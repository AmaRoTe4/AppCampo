import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DataMap } from "../../../../interface/index" 

export const UbicacionSlice = createSlice({
    name: 'Ubicacion',
    initialState: {
        ubicacion: {
            Longitud:-60,
            Latitud:-29,
        },
    },
    reducers: {
        setUbicacion: (state , action: PayloadAction<DataMap>) => {
            state.ubicacion = action.payload
        }
    },
})

export const {setUbicacion} = UbicacionSlice.actions

export default UbicacionSlice.reducer