import { useState } from "react";

function Todo({ id, createAt }) {
    return (
        <tr>
            <td>
                <label>{id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>
                    {createAt}
                </label>
            </td>
        </tr>
    );
}

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: "First task",
            createAt: "18:00"
        },
        {
            id: "Second task",
            createAt: "17:00"
        },
        {
            id: "Third task",
            createAt: "16:00"
        },
        {
            id: "Fourty task",
            createAt: "15:00"
        },
    ]);
    
    function reverseOrder() {
        setTasks([...tasks].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {tasks.map((todo) => (
                        <Todo id={todo.id} createAt={todo.createAt} key={todo.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tasks;
