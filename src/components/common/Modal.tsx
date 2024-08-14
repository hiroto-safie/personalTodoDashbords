import * as React from 'react';
import {Modal as MuiModal, Box} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 10, 
  boxShadow: 24,
  p: 4,
};

interface TaskBaseModalProps{
    open: boolean
    setOpen: (arg0: boolean) => void
    children: React.ReactNode
}

export const Modal: React.FC<TaskBaseModalProps> = ({open, setOpen, children}) => {
  return(
    <MuiModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={style}>
        {children}
      </Box>
    </MuiModal>
  )
}