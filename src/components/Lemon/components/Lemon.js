import "../styles/Lemon.css"
import Desserts from "./Desserts";
import Tasks from "./Tasks";

function Lemon() {
    return (
        <div>
            <h1>List of low cal desserts</h1>
            <Desserts />
            <Tasks />
        </div>
    );
}

export default Lemon;
