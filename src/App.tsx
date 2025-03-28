import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Installation from "./Installation"
import Docs from "./Docs"
import Privacy from "./Privacy"
import Terms from "./Terms"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path="" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/installation" element={<Installation/>}></Route>
              <Route path="/docs" element={<Docs/>}></Route>
            </Route>
            <Route path="/policy" element={<Privacy/>}></Route>
            <Route path="/terms" element={<Terms/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
