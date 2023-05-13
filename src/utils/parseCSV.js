import React from 'react';

// src/parseCSV.js
import Papa from 'papaparse';

export function parseCSV({fileURL, setData, setDisplayData, setDisplayRange}) {

    //parse the csv file using Papa.parse
    Papa.parse(fileURL, {
        download: true, //download the file from the url
        dynamicTyping: true, //converts numbers and booleans to their respective types
        skipEmptyLines: true,
        complete: function(results) {
            onComplete(results);
        }
    });

    //callback function for Papa.parse - sets the data state and the display data state
    function onComplete(results) {
        const data = results.data;

        //set time range as the first and last timestamps in the data - timestamps are in the first column (ignoring header row)
        const range = {start: data[1][0], end: data[data.length - 1][0]};

        //set the data state
        setData({data: data, range: range});

        //set the display data state
        setDisplayData(data);

        //set the display range state
        setDisplayRange(range);
    }
}
