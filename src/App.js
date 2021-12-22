import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Header />
        <Outlet />
      </Container>
    </div>
  )
}

export default App
