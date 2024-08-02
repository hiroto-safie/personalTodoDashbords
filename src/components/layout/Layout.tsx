import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Stack } from "@mui/material"
import { CenterLayout } from "./CenterLayout"

const Layout = () => {
    return(
        <>
            <Header />
            <Stack direction="row">
                <Sidebar />
                <CenterLayout>
                    <Outlet />
                </CenterLayout>
            </Stack>
        </>
    )
}

export default Layout