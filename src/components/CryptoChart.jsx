import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2"; 
import { Fragment } from "react";
  
  const CryptoChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(
        new Date(
          coinHistory?.data?.history[i].timestamp * 1000
        ).toLocaleDateString()
      );
    }
  
    const data = {
      labels: coinTimestamp.reverse(),
      datasets: [
        {
          label: "Price In USD",
          data: coinPrice.reverse(),
          fill: false,
          backgroundColor: "#aa6c6c",
          borderColor: "#271b1b",
        },
      ],
    };
  
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
    console.log(data, options, 'HOLA')
    return (
      <Fragment>
            <h1>
                {coinName} Price Chart{" "}
            </h1>
            <div className="chart-header">
                <div className="price-container">  
                <h5 className="price-change">
                    Change: {coinHistory?.data?.change}%
                </h5>
                <h5 level={5} className="current-price">
                    Current {coinName} Price: $ {currentPrice}
                </h5>
                <Line data={data} options={options}/>
                </div>
            </div>
        </Fragment>
    );
  };
  
  export default CryptoChart;