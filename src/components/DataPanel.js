import React from 'react';
import GPSSpeedPanel from "./data-panels/GPSSpeedPanel";

function DataPanel({chartType}) {

    let ChartComponent = null;
    let panelName = null;

    switch (chartType) {
        case "lap":
            ChartComponent = () => <div>Lap</div>;
            panelName = "Lap Chart";
            break;
        case "gpsSpeed":
            ChartComponent = () => <div>GPS Speed</div>;
            panelName = "GPS Speed Chart";
            break;
        case "pie":
            ChartComponent = () => <div>Pie Chart</div>;
            panelName = "Pie Chart";
            break;
        case "scatter":
            ChartComponent = () => <div>Scatter Chart</div>;
            panelName = "Scatter Chart";
            break;
        default:
            ChartComponent = () => <div>Default Chart</div>;
            panelName = "Default Chart";
    }


    return (
        <div className="h-full p-3 border-round-lg bg-bluegray-800">
            <div className="text-lg text-white font-bold">{panelName}</div>
            <ChartComponent></ChartComponent>
        </div>
    );
}

export default DataPanel;