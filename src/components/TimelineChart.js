import React from 'react';
import {Chart} from 'primereact/chart';

function TimelineChart({displayData, handleMouseDown, handleMouseUp, chartRef}) {

    //development dummy data
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40],
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
