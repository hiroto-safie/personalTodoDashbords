import React, { useMemo } from 'react';
import { Button as MuiButton, SxProps } from '@mui/material';

export interface BaseButtonProps {
    name: string;
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
    sx?: SxProps
}

export const Button: React.FC<BaseButtonProps> = ({ name, variant, onClick, sx }) => {
    // NOTE: sxかvariantに変更があれば、SubmitButtonの見た目が変わる可能性がある。
    // つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <MuiButton variant={variant} onClick={onClick} sx={sx}>
            {name}
        </MuiButton>
    ), [sx, variant]);
};