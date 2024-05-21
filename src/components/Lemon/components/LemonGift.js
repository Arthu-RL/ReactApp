import React from "react";

function LemonGift() {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then(data => setUser(data))
        .catch((error) => console.log(error));
    }, []);

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data Returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
            <img src={user.results[0].picture.large} alt="My Picture" />
        </div>
    ) : (
        <h1>Data pending...</h1>
    );
}

export default LemonGift;