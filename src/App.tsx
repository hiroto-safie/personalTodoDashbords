import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createRoutes, PAGES } from "./routes"
import PageLayout from "./components/layout/Layout"
import { ReduxProvider } from "./providers/ReduxProvider"

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <Routes>
            <Route element={<PageLayout/>}>
              {createRoutes(PAGES)}
            </Route>
        </Routes>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App