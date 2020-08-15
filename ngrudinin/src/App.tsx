
import './App.css';
import React, { useState } from 'react';
import { TaskList } from './components/task-list';
import { AddTaskBlock } from './components/add-task-block';
import { TaskModel } from './models/TaskModel';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

/*
  Сделать TODO лист в функциональном стиле 
  Два блока - список задач, окно добавления таска (тест, кнопка)
  В списке задач появляются добавленные задачи,
    Есть возможность их выполнить путем нажатия на чекбокс (слева)
    Есть возможность их удалить путем нажатия на кнопку удаления (справа)
 */

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const addTask = (task: TaskModel) => setTasks(tasks.concat([task]));

  const removeTask = (task: TaskModel) => setTasks(tasks.filter(q => q.id !== task.id))

  const onChangeStatusTask = (task: TaskModel) => {
    console.log(task);
    tasks.sort((a, b) => {
      if (a.enabled && !b.enabled) return -1;
      if (!a.enabled && b.enabled) return 1;
      return 0;
    });
    console.log(tasks);
    setTasks([...tasks])
  }

  return <Container className="margin-top">
    <Row>
      <Col></Col>
      <Col>
        <TaskList
          onRemoveTask={(task: TaskModel) => removeTask(task)}
          onChangeStatusTask={(t) => onChangeStatusTask(t)}
          tasks={tasks}></TaskList>
      </Col>
      <Col></Col>

    </Row>
    <Row>
      <Col></Col>

      <Col>
        <AddTaskBlock onAddTask={(task: TaskModel) => addTask(task)}></AddTaskBlock>
      </Col>
      <Col></Col>

    </Row>
  </Container>;
}

export default App;
