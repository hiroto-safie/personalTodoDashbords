import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Stack } from "@mui/material"

const Layout = () => {
    return(
        <>
            <Header />
            <Stack direction="row">
                <Sidebar />
                <Outlet />
            </Stack>
        </>
    )
}

export default Layout