import "../styles/Lemon.css"
import Desserts from "./Desserts";
import Tasks from "./Tasks";
import LemonGift from "./LemonGift";
import GetNextDay from "./GetNextDay";

function Lemon() {
    return (
        <div>
            <h1>List of low cal desserts</h1>
            <Desserts />
            <Tasks />
            <LemonGift />
            <GetNextDay />
        </div>
    );
}

export default Lemon;
