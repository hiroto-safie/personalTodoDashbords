import React from 'react';
import { Button, SxProps } from '@mui/material';

interface ButtonProps {
    name: string;
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
    sx?: SxProps
};

const buttonBaseStyle: SxProps = {
    margin: 2
}

export const SubmitButton: React.FC<ButtonProps> = ({ name, variant, onClick, sx }) => {
    return (
        <Button variant={variant} onClick={onClick} sx={{...buttonBaseStyle, ...sx}}>
            {name}
        </Button>
    );
};