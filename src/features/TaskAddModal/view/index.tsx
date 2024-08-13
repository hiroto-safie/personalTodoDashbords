import { Box, Typography, Stack } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../../actions";
import { SubmitButton } from "../../../components/common/Buttons";
import { FormInput, DateInput } from "../../../components/common/Inputs";
import { PriorityMenu } from "../../../components/common/Menus";
import { Task } from "../../../types/task";
import { Modal } from "../../../components/common/Modals";

export interface TaskAddModalProps{
    open: boolean
    setOpen: (arg0: boolean) => void
}

export const TaskAddModal:React.FC<TaskAddModalProps> = ({open, setOpen}) => {
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
      <Modal open={open} setOpen={setOpen}>
          <Box component="form">
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