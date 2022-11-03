import { configureStore } from '@reduxjs/toolkit'
import ubicacion from './slices/ubicacion/ubicacion'
import totales from './slices/Totales/Totales' 
import materiasPrimas from './slices/MateriasPrimas/MateriasPrimas' 

export const Store = configureStore({
    reducer: {
        ubicacion: ubicacion,
        totales: totales,
        materiasPrimas: materiasPrimas,
    },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
