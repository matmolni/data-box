import React, {useContext, useEffect, useRef, useState} from "react";
import {DataContext, DisplayContext} from "../../app/AppContexts";
import fetchDatalog from "../../utils/fetchDatalog";
import {Chart} from "primereact/chart";

function RangePanel( {dataSource, dataset} ) {

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
        fetchDatalog(selectedDataset, dataSource).then((datalog) => {
            dataset.data = getDataLogData(datalog);
            const newData = {
                datasets: [
                    dataset
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
                },
                min : displayRange.start,
                max : displayRange.end
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                align: 'center',
                labels: {
                    color: 'rgb(255,255,255)',
                    boxHeight: 2,
                    boxWidth: 15,
                }
            }
        },
        onHover: null,
        onClick: null,
        onResize: null,
        onResizeDelay: 0,
    };

    return (
        <Chart type="line" height={150} data={data} options={options}/>
    );
}

export default RangePanel;