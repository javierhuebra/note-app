import {AiFillDelete} from 'react-icons/ai'
const Task = ({ id, title, deleteTask, completed }) => {
    return (
        <div className="task" onClick={()=>deleteTask(id)}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{completed}</p>
            <div><AiFillDelete/></div>
        </div>
    );
};
export default Task;
