import React, { useMemo } from 'react';
import { Button, SxProps } from '@mui/material';

interface ButtonProps {
    name: string;
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
    sx?: SxProps
}

const buttonBaseStyle: SxProps = {
    margin: 2
}

export const SubmitButton: React.FC<ButtonProps> = ({ name, variant, onClick, sx }) => {
    // NOTE: sxかvariantに変更があれば、SubmitButtonの見た目が変わる可能性がある。
    // つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Button variant={variant} onClick={onClick} sx={{...buttonBaseStyle, ...sx}}>
            {name}
        </Button>
    ), [sx, variant]);
};