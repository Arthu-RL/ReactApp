import "../styles/Lab.css"
import TextInputWithFocusButton from "./TextInputWithFocusButton"
import CounterWithReducer from "./CounterReducer";
import RestaurantDeeds from "./RestaurantDeeds";
import CloneElements from "./CloneElements";
import RadioCore from "./Radio";

function Lab() {
    return (
        <div>
            <TextInputWithFocusButton />
            <CounterWithReducer />
            <RestaurantDeeds />
            <CloneElements />
            <RadioCore />
        </div>
    );
}

export default Lab;