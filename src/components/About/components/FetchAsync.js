import React from "react";

function FetchAsync() {
    const [btcData, setBtcData] = React.useState({}); 
    console.log(btcData);

    async function fetchData() {
        try {
            const dataJson = await (await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)).json()
            setBtcData(dataJson.bpi.USD)
        } catch (err) {
            console.error(err)
        }
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