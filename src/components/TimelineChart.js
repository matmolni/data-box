import React, {useContext, useEffect, useState} from 'react';
import {Chart} from 'primereact/chart';
import fetchDatalog from "../utils/fetchDatalog";
import 'chartjs-adapter-date-fns';
import {DataContext} from "../app/AppContexts";

function TimelineChart({chartRef, handleMouseDown, handleMouseUp}) {

    //selected dataset and display range from context
    const {selectedDataset, displayRange} = useContext(DataContext);

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
                        stepped: true,
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
                type : 'time',
                time: {
                    displayFormats: {
                        millisecond: 'mm:ss.SSS',
                    }
                },
                ticks: {
                    maxRotation: 0,
                }
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
        <Chart className="flex-auto" ref={chartRef} type="line" data={data} options={options} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
    );
}

export default TimelineChart;
