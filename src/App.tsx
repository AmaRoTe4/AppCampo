//import { useEffect, useState } from 'react';
import { BrowserRouter  , Routes , Route} from 'react-router-dom'
import Main from './routes/Main/index'
import MapasMain from './routes/Mapas/index'
import Mapa from './routes/Mapas/Mapa/Mapa'
import MateriasPrimas from './routes/MateriasPrimas/index'
import Totales from './routes/Totales'
import {InformacionMatPri , InformacionTotales} from './routes/Informacion/index'
import './App.css'
import { Provider } from 'react-redux'
import {Store} from './store/store'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Mapas/" element={<MapasMain />} />
          <Route path="/Mapas/Mapa" element={<Mapa />} />
          <Route path="/Totales" element={<Totales />} />
          <Route path="/MateriasPrimas/Maiz" element={<MateriasPrimas type="Maiz"  />} />
          <Route path="/MateriasPrimas/Soja" element={<MateriasPrimas type="Soja"  />} />
          <Route path="/MateriasPrimas/Trigo" element={<MateriasPrimas type="Trigo"  />} />
          <Route path="/Informacion/Totales" element={<InformacionTotales />} />
          <Route path="/Informacion/MateriasPrimas" element={<InformacionMatPri />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
