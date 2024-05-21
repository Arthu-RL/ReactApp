import "../styles/Lemon.css"
import Desserts from "./Desserts";
import Tasks from "./Tasks";
import LemonGift from "./LemonGift";

function Lemon() {
    return (
        <div>
            <h1>List of low cal desserts</h1>
            <Desserts />
            <Tasks />
            <LemonGift />
        </div>
    );
}

export default Lemon;
