import {AiFillDelete} from 'react-icons/ai'
const Task = ({ id, title, deleteTask, completed }) => {
    return (
        <div className="task" onClick={()=>deleteTask(id)}>
            <div><p>id: {id}</p><AiFillDelete/></div>
            <h2>{title}</h2>
        </div>
    );
};
export default Task;
