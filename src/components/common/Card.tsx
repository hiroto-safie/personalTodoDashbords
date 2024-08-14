import { Card as MuiCard, CardContent } from "@mui/material"
import React from "react"

export const Card: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <MuiCard>
            <CardContent>
                {children}
            </CardContent>
        </MuiCard>
    )
}