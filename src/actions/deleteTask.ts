export const DELETE_TASK = 'DELETE_TASK'

export const deleteTask = (id: number) => {
    return {
        type: DELETE_TASK,
        id: id
    }
}