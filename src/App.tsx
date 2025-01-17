import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createRoutes, PAGES } from "./routes"
import PageLayout from "./components/layout/Layout"
import { TaskContextProvider } from "./providers/TaskContextProvider"


function App() {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <Routes>
            <Route element={<PageLayout/>}>
              {createRoutes(PAGES)}
            </Route>
        </Routes>
      </TaskContextProvider>
    </BrowserRouter>
  )
}

export default App