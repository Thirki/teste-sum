import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';

import {Home} from './pages/Home';
import {Erro} from './pages/Erro';
import {CurrentDashboard} from './pages/CurrentDashboard';

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/dashboard/:id" element={<CurrentDashboard/>}/>
        <Route path="/dashboard/:id" element={<CurrentDashboard/>}/>
        <Route path="/*" element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  )
}