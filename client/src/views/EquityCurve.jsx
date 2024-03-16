import { useState, useEffect } from "react";
import YahooService from "../services/YahooService";

const EquityCurve = (props) => {
    const [price, setPrice] = useState(0)
    const symbol = "CCJ"
    // useEffect(() => {
    //     YahooService.getQuote(symbol)
    //         .then((res) => {
    //             console.log((res.chart.result[0].meta.regularMarketPrice));
    //             // setPrice((res));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [symbol])

    return (
        <div>
            <h1>Equity Curve</h1>
        </div>
    )

}

export default EquityCurve