import { Box, Typography, Stack } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { editTask } from "../../../../../actions";
import { SubmitButton } from "../../../../../components/common/Button";
import { FormInput, DateInput } from "../../../Inputs";
import { PriorityMenu, StatusMenu } from "../../../Menus";
import { TaskAddModalProps } from "../../TaskAddModal/view";
import { Task } from "../../../../../types/task";
import { Modal } from "../../../../../components/common/Modal";
import { useAppDispatch } from "../../../../../reducers";

interface TaskEditModalProps extends TaskAddModalProps{
    task: Task
}

export const TaskEditModal:React.FC<TaskEditModalProps> = ({open, setOpen, task}) => {
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm()
  const dispatch = useAppDispatch()

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
      setOpen={setOpen}
    >
        <Box component="form">
            <Typography variant="h3">
                Task Edit
            </Typography>
            <FormInput register={register} title="Task Name" fieldName="name" value={task.name} sx={{width: "100%"}} />
            <Stack direction="row" justifyContent="space-between">
                <PriorityMenu register={register} title="Task priority" fieldName="priority" value={task.priority} />
                <StatusMenu register={register} title="Task status" fieldName="status" value={task.status} />
                <DateInput register={register} title="Due Date" fieldName="dueDate" sx={{width: "100%"}}/>
            </Stack>
            <FormInput register={register} title="Description" fieldName="description" value={task.description} sx={{width: "100%"}}/>
            <Stack justifyContent="center" alignItems="center">
                <SubmitButton name="Register" variant="contained" onClick={handleSubmit(onSubmit)} sx={{width: "30%"}}/>
            </Stack>
        </Box>
    </Modal>
  );
}