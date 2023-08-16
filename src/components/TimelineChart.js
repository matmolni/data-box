import React, {useEffect, useState} from 'react';
import {Chart} from 'primereact/chart';
import fetchDatalog from "../utils/fetchDatalog";

function TimelineChart({chartRef, handleMouseDown, handleMouseUp, selectedDataset, displayRange}) {

    const [data, setData] = useState(null);

    function getDataLogData(datalog) {
        if (!datalog) {
            return [];
        }
        return datalog.map((record) => ({
            x : record.relativeTimestamp,
            y : record.data
        }));
    }

    //fetch data from server when selectedDataset changes and update chart data
    useEffect(() => {
        fetchDatalog(selectedDataset, "lap").then((datalog) => {
            const newData = {
                datasets: [
                    {
                        label: 'Lap Count',
                        backgroundColor: 'rgba(255,99,132,1)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,1)',
                        hoverBorderColor: 'rgba(255,99,132,0.4)',
                        data: getDataLogData(datalog),
                    },
                ],
            };
            setData(newData);
        });

    }, [selectedDataset]);

    //timeline chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                type : 'linear',
            },
            y: {
                display: false,
            }
        },
        onHover: null,
        onClick: null,
        onResize: null,
        onResizeDelay: 0,
    };

    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <Chart ref={chartRef} type="line" data={data} options={options}/>
        </div>
    );
}

export default TimelineChart;
