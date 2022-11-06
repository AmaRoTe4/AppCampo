import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Totales } from "../../../interface/index" 
import maiz from './maiz.json'
import trigo from './trigo.json'
import soja from './soja.json'

export const MateriasPrimasSlice = createSlice({
    name: 'MateriasPrimas',
    initialState: {
        maizTotales: maiz,
        sojaTotales: soja,
        trigoTotales: trigo,
        seleccionado:{
            division:"",
            type:"",
            nombre:"",
            fecha:""
        }
    },
    reducers: {
        setTotalesMaiz: (state , action: PayloadAction<Totales[]>) => {
            state.maizTotales = action.payload
        },
        setTotalesSoja: (state , action: PayloadAction<Totales[]>) => {
            state.sojaTotales = action.payload
        },
        setTotalesTrigo: (state , action: PayloadAction<Totales[]>) => {
            state.trigoTotales = action.payload
        },
        setSeleccionado: (state , action: PayloadAction<Totales>) => {
            state.seleccionado = action.payload
        }
    },
})

export const {

    setTotalesTrigo , 
    setTotalesSoja , 
    setTotalesMaiz , 
    setSeleccionado

} = MateriasPrimasSlice.actions

export default MateriasPrimasSlice.reducer