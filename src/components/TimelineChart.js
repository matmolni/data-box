import React from 'react';
import {Chart} from 'primereact/chart';

function TimelineChart({displayData, handleMouseDown, handleMouseUp, chartRef}) {

    //development dummy data
    const data = {
        labels: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00'],
        datasets: [
            {
                label: 'Lap Count',
                backgroundColor: 'rgba(255,99,132,1)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,1)',
                hoverBorderColor: 'rgba(255,99,132,0.4)',
                data: [1, 1, 2, 2, 2, 3, 3],
            },
        ],
    };

    //timeline chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {

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
