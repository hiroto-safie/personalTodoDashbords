import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createRoutes, PAGES } from "./routes"
import PageLayout from "./components/layout/Layout"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PageLayout/>}>
              {createRoutes(PAGES)}
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App