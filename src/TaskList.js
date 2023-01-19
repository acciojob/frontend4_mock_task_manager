import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  //write your code here
}
