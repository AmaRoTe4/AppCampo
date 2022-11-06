import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Totales } from "../../../interface/index" 
import Json from './data.json'

export const TotalesSlice = createSlice({
    name: 'Totales',
    initialState: {
        totales: Json,
        seleccionado:{
            division:"",
            type:"",
            nombre:"",
            fecha:""
        }
    },
    reducers: {
        setTotales: (state , action: PayloadAction<Totales[]>) => {
            state.totales = action.payload
        },
        setSeleccionado: (state , action: PayloadAction<Totales>) => {
            state.seleccionado = action.payload
        }
    },
})

export const {setTotales , setSeleccionado} = TotalesSlice.actions

export default TotalesSlice.reducer