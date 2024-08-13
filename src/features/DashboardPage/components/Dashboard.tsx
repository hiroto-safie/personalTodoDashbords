import { Paper, Stack } from "@mui/material";
import React from "react";

// NOTE: upComingTaskCardsの内容が変わらなければ、Dashboardコンポーネントは再レンダリングする必要がない
export const Dashboard: React.FC<{ upComingTaskCards: JSX.Element[] }> = React.memo(({ upComingTaskCards }) => {
    return (
        <Paper sx={{ minWidth: "50vw" }}>
            <Stack direction="column">
                {upComingTaskCards}
            </Stack>
        </Paper>
    );
})