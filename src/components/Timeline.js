import React, {useContext} from 'react';
import TimelineChart from "./TimelineChart";
import {useRef} from "react";
import {DataContext} from "../app/AppContexts";

function Timeline() {

    //selected dataset, display range and setDisplayRange function from context
    const {displayMoment, setDisplayMoment, displayRange, setDisplayRange} = useContext(DataContext);

    const chartRef = useRef(null);

    let dragStart = null;
    let dragEnd = null;

    //function that handles the mouse down event
    function handleMouseDown(event) {
        if (chartRef.current !== null) {
            const chart = chartRef.current.getCanvas();
            //console.log(chart)
            const canvasPosition = chart.getBoundingClientRect();

            const x = event.clientX - canvasPosition.left;
            const y = event.clientY - canvasPosition.top;

            dragStart = { x, y };
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

            dragEnd = { x, y };
            console.log(dragEnd);

            // Check if it's a click or a drag
            if (Math.abs(dragEnd.x - dragStart.x) < 5) { // Assuming a 5 pixel threshold for click vs drag
                calculateDisplayMoment();
            } else {
                calculateDisplayRange();
            }
        }
    }

    //function that calculates the displayMoment based on the dragStart position
    function calculateDisplayMoment() {
        if (dragStart !== null) {
            const chart = chartRef.current.getCanvas();
            const chartPosition = chart.getBoundingClientRect();
            const chartWidth = chartPosition.width;

            // Calculate the percentage position of dragStart on the canvas
            const dragStartPercent = dragStart.x / chartWidth;

            // Calculate the time range currently being displayed on the canvas
            const currentRange = displayRange.end - displayRange.start;

            // Convert the dragStart percentage position to an actual time within the displayRange
            const timeOffset = currentRange * dragStartPercent;

            // Calculate the displayMoment based on the start of the displayRange and the timeOffset
            let displayMomentValue = displayRange.start + timeOffset;

            // Round the displayMomentValue to the nearest 5ms
            displayMomentValue = Math.round(displayMomentValue / 5) * 5;

            // Set the displayMoment
            setDisplayMoment(displayMomentValue);
        }
        return null;
    }


    //function that changes displayRange proportionally to the drag range selected by the user
    function calculateDisplayRange() {
        const dragRange = calculateDragRange();

        if (dragRange !== null) {
            //the current range in ms as a difference between the start and end of the range
            const currentRange = displayRange.end - displayRange.start;

            const newRangeStart = currentRange * dragRange.start / 100;
            const newRangeEnd = currentRange * dragRange.end / 100;
            const newRange = {start: newRangeStart, end: newRangeEnd};

            setDisplayRange(newRange);

            console.log(dragRange, newRange);
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
        <div className="flex h-full p-3 align-items-stretch">
                <TimelineChart
                    chartRef={chartRef}
                    handleMouseDown={handleMouseDown}
                    handleMouseUp={handleMouseUp}
                ></TimelineChart>
        </div>
    );
}

export default Timeline;