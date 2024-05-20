import React from "react";

function GoalForm(props) {
    const [formData, setFormData] = React.useState({goal: "", by: ""});

    function changeHandler(e) {
        setFormData((prevState) => ({ ...prevState,  [e.target.name]: e.target.value}))
    };

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""});
    };

    return (
        <>
            <h1>Set your goals here</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler} />
                <button type="Submit" disabled={formData.goal === "" || formData.by === ""}>Submit</button>
            </form>
        </>
    );
}

function ListOfGoals(props) {

    return (
        <div>
            <ul>
                {
                    props.allGoals.map((g) => { return (<li key={g.goal}><span>{g.goal} - {g.by}</span></li>);})
                }
            </ul>
        </div>
    );
}

function RenderGoals() {
    const [allGoals, updateGoals] = React.useState([]);

    function addGoal(goal) { updateGoals([...allGoals, goal]); };
    
    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}

export default RenderGoals;