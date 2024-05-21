import "../styles/Lab.css"
import TextInputWithFocusButton from "./TextInputWithFocusButton"
import CounterWithReducer from "./CounterReducer";
import RestaurantDeeds from "./RestaurantDeeds";

function Lab() {
    return (
        <div>
            <TextInputWithFocusButton />
            <CounterWithReducer />
            <RestaurantDeeds />
        </div>
    );
}

export default Lab;