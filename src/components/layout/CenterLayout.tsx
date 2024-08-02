import { Container, Stack } from "@mui/material"

interface CenterLayoutProps {
    children: React.ReactNode;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export const CenterLayout: React.FC<CenterLayoutProps> = ({ children, maxWidth }) => {
    return (
        <Container maxWidth={maxWidth}>
            <Stack 
                direction="column"
                alignItems="center"
                flexWrap="nowrap"
                gap={8}
                sx={{ height: "100%", position: "relative" }}
            >
                {children}
            </Stack>
        </Container>
    )
}