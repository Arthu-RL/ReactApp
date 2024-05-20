import React from "react";

function FetchAsync() {
    const [btcData, setBtcData] = React.useState({}); 

    function fetchData() {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
        .then((response) => response.json()) 
        .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
        .catch((error) => console.log(error)); 
    }

    React.useEffect(() => { 
        fetchData();
    }, []); 

    return (
        <div> 
        <h1>Current BTC/USD data</h1> 
        <p>Code: {btcData.code}</p> 
        <p>Symbol: {btcData.symbol}</p> 
        <p>Rate: {btcData.rate}</p> 
        <p>Description: {btcData.description}</p> 
        <p>Rate Float: {btcData.rate_float}</p> 
      </div> 
    );
}

export default FetchAsync;