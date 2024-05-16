import { v4 } from "uuid"
import { TodoListComponent, TasksContainer } from "./styles"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  todoListSliceSelectors,
  todoListSliceActions,
} from "store/redux/todoList/todoListSclice"

function TodoList() {
  const [task, setTask] = useState<string>("")

  const dispatch = useAppDispatch()

  const taskArray = useAppSelector(todoListSliceSelectors.todoList)

  const onClick = () => {
    dispatch(todoListSliceActions.addTask(task))
  }
  console.log("task", taskArray)

  const tasksMap = taskArray.map(task => {
    return <div key={v4()}>{task}</div>
  })

  return (
    <TodoListComponent>
      <Input
        name={"Task Input"}
        onInputChange={event => setTask(event.target.value)}
        value={task}
      />
      <Button name="Submit" onButtonClick={onClick} />
      <TasksContainer>{tasksMap}</TasksContainer>
    </TodoListComponent>
  )
}

export default TodoList
