import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DateInput, FormInput } from './Inputs';
import { FieldValues, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { SubmitButton } from './Buttons';
import { Task } from '../../types/task';
import dayjs from 'dayjs';
import { PriorityMenu, StatusMenu } from './Menus';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../actions';

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
  const dispatch = useDispatch();

  const onSubmit = (inputValue: FieldValues) => {
    const addedTask: Task = {
      id: Math.floor(Math.random() * 1000000),
      name: inputValue.name,
      priority: inputValue.priority,
      dueDate: inputValue.dueDate,
      description: inputValue.description,
      status: "Untouched"
    }
    
    dispatch(addTask(addedTask))
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
            <FormInput register={register} title="Task Name" fieldName="name" required sx={{width: "100%"}}/>
            <Stack direction="row" justifyContent="space-between">
                <PriorityMenu register={register} title="Task priority" value="High" fieldName="priority" required />
                <DateInput register={register} title="Due Date" fieldName="dueDate" required sx={{width: "100%"}}/>
            </Stack>
            <FormInput register={register} title="Description" fieldName="description" required sx={{width: "100%"}}/>
            <Stack justifyContent="center" alignItems="center">
                <SubmitButton name="Register" variant="contained" onClick={handleSubmit(onSubmit)} sx={{width: "30%"}}/>
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
  const dispatch = useDispatch();

  const onSubmit = (inputValue: FieldValues) => {
    const edittedTask: Task = {
      id: task.id,
      name: inputValue.name,
      priority: inputValue.priority,
      dueDate: inputValue.dueDate,
      description: inputValue.description,
      status: inputValue.status
    }
    
    dispatch(editTask(edittedTask))
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
            <FormInput register={register} title="Task Name" fieldName="name" value={task.name} sx={{width: "100%"}} />
            <Stack direction="row" justifyContent="space-between">
                <PriorityMenu register={register} title="Task priority" fieldName="priority" value={task.priority} />
                <StatusMenu register={register} title="Task status" fieldName="status" value={task.status} />
                <DateInput register={register} title="Due Date" fieldName="dueDate" value={task.dueDate} sx={{width: "100%"}}/>
            </Stack>
            <FormInput register={register} title="Description" fieldName="description" value={task.description} sx={{width: "100%"}}/>
            <Stack justifyContent="center" alignItems="center">
                <SubmitButton name="Register" variant="contained" onClick={handleSubmit(onSubmit)} sx={{width: "30%"}}/>
            </Stack>
        </Box>
    </Modal>
  );
}