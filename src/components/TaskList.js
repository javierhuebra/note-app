import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    };

    const deleteTask = (id) =>{
        const updatedTasks = tasks.filter(task => task.id != id);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <TaskForm envioDeLaTarea={addTask} />
            <div className="taskContainer">
                {tasks.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.text}
                            //description={task.description}
                            completed={task.completed}
                            deleteTask={deleteTask}
                        />
                    );
                })}
            </div>
        </div> //Esto es un fragment
    );
};
export default TaskList;
