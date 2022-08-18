import {React, useContext} from 'react'
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Dashboard from './pages/dashboard/Dashboard'
import { userInputs, productInputs } from './formSource'
import { DarkModeContext } from './context/darkModeContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./pages/style/dark.scss"

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
     <BrowserRouter>
    <Routes>
      <Route path="/">
          <Route index element={<Home/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>

          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}