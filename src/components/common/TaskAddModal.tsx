import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DateInput, FormInput, SelectInput } from './Inputs';
import { useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { SubmitButton } from './Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 10, 
  boxShadow: 24,
  p: 4,
};

interface TaskAddModalProps{
    open: boolean
    setOpen: (arg0: boolean) => void
}

export const TaskAddModal:React.FC<TaskAddModalProps> = ({open, setOpen}) => {
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    console.log("Task Added")
    handleClose()
  }

  return (
    <Modal
    open={open}
    onClose={handleClose}
    >
        <Box component="form" sx={style}>
            <Typography variant="h3">
                Task Addition
            </Typography>
            <FormInput register={register} fieldName="Task Name" required sx={{width: "100%"}}/>
            <Stack direction="row" justifyContent="space-between">
                <SelectInput register={register} fieldName="Task priority" required />
                <DateInput register={register} fieldName="Due date" required sx={{width: "100%"}}/>
            </Stack>
            <FormInput register={register} fieldName="Description" required sx={{width: "100%"}}/>
            <Stack justifyContent="center" alignItems="center">
                <SubmitButton name="Register" variant="contained" onClick={() => handleSubmit(onSubmit)} sx={{width: "30%"}}/>
            </Stack>
        </Box>
    </Modal>
  );
}