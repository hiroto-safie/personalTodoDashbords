import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DateInput, FormInput, SelectInput } from './Inputs';
import { FieldValue, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { SubmitButton } from './Buttons';
import { TaskContext } from '../../providers/TaskContextProvider';
import { useContext } from 'react';
import { Task } from '../../types/task';
import { Dayjs } from 'dayjs';

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
}

export const TaskAddModal:React.FC<TaskBaseModalProps> = ({open, setOpen}) => {
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm()
  const {dispatch} = useContext(TaskContext)

  const onSubmit = (inputValue: FieldValue<Task>) => {
    console.log("Task Added")
    console.log(inputValue);
    
    dispatch({type: "ADD_TASK", payload: inputValue})
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

interface TaskEditModalProps extends TaskBaseModalProps{
    task: Task
}

export const TaskEditModal:React.FC<TaskEditModalProps> = ({open, setOpen, task}) => {
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm()
  const {dispatch} = useContext(TaskContext)

  const onSubmit = (inputValue: FieldValue<Task>) => {
    console.log("Task Edited")
    console.log(inputValue);
    
    dispatch({type: "UPDATE_TASK", payload: inputValue})
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
        <Box component="form" sx={style}>
            <Typography variant="h3">
                Task Edit
            </Typography>
            <FormInput register={register} fieldName="Task Name" value={task.name} required sx={{width: "100%"}} />
            <Stack direction="row" justifyContent="space-between">
                <SelectInput register={register} fieldName="Task priority" value={task.priority} required />
                <DateInput register={register} fieldName="Due date" value={new Dayjs(task.dueDate).format()} required sx={{width: "100%"}}/>
            </Stack>
            <FormInput register={register} fieldName="Description" value={task.description} required sx={{width: "100%"}}/>
            <Stack justifyContent="center" alignItems="center">
                <SubmitButton name="Register" variant="contained" onClick={() => handleSubmit(onSubmit)} sx={{width: "30%"}}/>
            </Stack>
        </Box>
    </Modal>
  );
}