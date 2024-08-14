import { SxProps } from "@mui/material";
import { useMemo } from "react";
import { BaseButtonProps, Button } from "../../../components/common/Button";

export const SubmitButton: React.FC<Omit<BaseButtonProps, "name">> = ({ variant, onClick, sx }) => {
    const submitButtonStyle: SxProps = {
        ...sx,
        margin: 2
    }

    // NOTE: sxかvariantに変更があれば、SubmitButtonの見た目が変わる可能性がある。
    // つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Button name="Submit" variant={variant} onClick={onClick} sx={submitButtonStyle} />
    ), [sx, variant]);
};