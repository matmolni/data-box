import TimelineChart from "./TimelineChart";
import {useRef, useState} from "react";

function Timeline({displayData, displayRange, setDisplayRange}) {

    const chartRef = useRef(null);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);

    //function that handles the mouse down event
    function handleMouseDown(event) {
        if (chartRef.current !== null) {
            const chart = chartRef.current.getCanvas();
            //console.log(chart)
            const canvasPosition = chart.getBoundingClientRect();

            const x = event.clientX - canvasPosition.left;
            const y = event.clientY - canvasPosition.top;

            setDragStart({ x, y });
            console.log(dragStart);
        }
    }

    //function that handles the mouse up event
    function handleMouseUp(event) {
        if (chartRef.current !== null && dragStart !== null) {
            const chart = chartRef.current.getCanvas()
            const canvasPosition = chart.getBoundingClientRect();

            const x = event.clientX - canvasPosition.left;
            const y = event.clientY - canvasPosition.top;

            setDragEnd({ x, y });
            console.log(dragEnd);

            calculateDisplayRange()
        }
    }

    //function that changes displayRange proportionally to the drag range selected by the user
    function calculateDisplayRange() {
        const dragRange = calculateDragRange();

        if (dragRange !== null) {
            const currentRange = displayRange.end - displayRange.start;

            const newRangeStart = currentRange * dragRange.start / 100;
            const newRangeEnd = currentRange * dragRange.end / 100;

            setDisplayRange({start: newRangeStart, end: newRangeEnd});

            console.log(dragRange, displayRange);
        }
    }

    //function that calculates the drag range selected by the user as a percentage of the data displayed
    function calculateDragRange() {
        if (dragStart !== null && dragEnd !== null) {
            const chart = chartRef.current.getCanvas();
            const chartPosition = chart.getBoundingClientRect();
            const chartWidth = chartPosition.width;

            const minX = Math.min(dragStart.x, dragEnd.x);
            const maxX = Math.max(dragStart.x, dragEnd.x);

            const minXPercent = minX / chartWidth;
            const maxXPercent = maxX / chartWidth;
            const minXValue = minXPercent * 100;
            const maxXValue = maxXPercent * 100;

            return{
                start: minXValue,
                end: maxXValue,
            };
        }
    }

    return (
        <TimelineChart chartRef={chartRef} displayData={displayData} handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp}></TimelineChart>
    );
}

export default Timeline;